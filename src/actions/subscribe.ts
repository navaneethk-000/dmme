"use server"

export async function subscribeToTrial(formData: FormData) {
  // Simulate a delay to mimic server processing
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Get form data
  const email = formData.get("email") as string

  // In a real application, you would:
  // 1. Validate the email
  // 2. Store it in a database
  // 3. Send a confirmation email
  // 4. Maybe add them to a newsletter service

  console.log("Trial subscription:", { email })

  // Return success
  return { success: true }
}
