
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ApplicantData {
  fullName: string;
  email: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

interface ApplicationRequest {
  jobId: string;
  jobTitle: string;
  applicant: ApplicantData;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { jobId, jobTitle, applicant }: ApplicationRequest = await req.json();

    // Validate inputs
    if (!jobId || !jobTitle || !applicant.fullName || !applicant.email) {
      return new Response(
        JSON.stringify({ error: "Missing required application data" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send email notification to hiring team
    const emailResponse = await resend.emails.send({
      from: "OllyGarden Careers <careers@olly.garden>",
      to: ["hiring@olly.garden"],
      subject: `New Application: ${jobTitle} (Job ID: ${jobId})`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Position:</strong> ${jobTitle}</p>
        <p><strong>Job ID:</strong> ${jobId}</p>
        <h3>Applicant Information:</h3>
        <p><strong>Name:</strong> ${applicant.fullName}</p>
        <p><strong>Email:</strong> ${applicant.email}</p>
        ${applicant.linkedinUrl ? `<p><strong>LinkedIn:</strong> <a href="${applicant.linkedinUrl}">${applicant.linkedinUrl}</a></p>` : ''}
        ${applicant.githubUrl ? `<p><strong>GitHub/Portfolio:</strong> <a href="${applicant.githubUrl}">${applicant.githubUrl}</a></p>` : ''}
      `,
    });

    console.log("Application email sent successfully:", emailResponse);

    // Send confirmation email to applicant
    await resend.emails.send({
      from: "OllyGarden Careers <careers@olly.garden>",
      to: [applicant.email],
      subject: `Thank you for applying to ${jobTitle}`,
      html: `
        <h2>Thank You for Your Application</h2>
        <p>Dear ${applicant.fullName},</p>
        <p>Thank you for applying to the <strong>${jobTitle}</strong> position at OllyGarden. We've received your application and our team will review it shortly.</p>
        <p>We appreciate your interest in joining our garden of innovation!</p>
        <p>Best regards,<br>The OllyGarden Hiring Team</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending application email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
