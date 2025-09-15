"use server";
export async function submitcontact(formData) {
  const email = formData.get("name");
  console.log(email,formData.get("email"),formData.get("message"));
  
}
