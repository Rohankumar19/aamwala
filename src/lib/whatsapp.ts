export async function sendWhatsAppConfirmation(phone: string, order: Record<string, unknown>) {
  if (!process.env.INTERAKT_API_KEY) {
    console.log("WhatsApp notification skipped: Missing API Key")
    return
  }
  
  try {
    await fetch("https://api.interakt.ai/v1/public/message/", {
      method: "POST",
      headers: {
        Authorization: `Basic ${process.env.INTERAKT_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        countryCode: "+91", 
        phoneNumber: phone,
        callbackData: order.id,
        type: "Template",
        template: {
          name: "order_confirmed",
          languageCode: "en",
          bodyValues: [(order.user as Record<string, string>)?.name || "Customer", order.id, String((order.total as number) / 100)]
        }
      })
    })
    console.log("WhatsApp message sent to", phone)
  } catch (error) {
    console.error("Failed to send WhatsApp message", error)
  }
}
