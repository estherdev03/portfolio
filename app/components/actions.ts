"use server";

export const sendEmail = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const message = formData.get("message") as string;

  const error: Record<string, string> = {};
  if (!name) error["name"] = "Name is required";
  if (!email) error["email"] = "Email is required";
  if (!message) error["message"] = "Message is required";

  if (Object.keys(error).length > 0) {
    return { success: false, error: error };
  }

  const formSubmit: Record<string, string> = {};
  formSubmit["name"] = name;
  formSubmit["email"] = email;
  formSubmit["message"] = message;

  if (company) formSubmit["company"] = company;

  try {
    const response = await fetch("https://formspree.io/f/mwlpwdaz", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formSubmit),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to send to Formspree");
    }

    return { success: true, error: {} };
  } catch (error) {
    console.log("Formspree submission error: ", error);
    return {
      success: false,
      error: { server: "Could not send message. Please try again later." },
    };
  }
};
