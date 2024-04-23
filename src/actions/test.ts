"use server";

export async function testAction() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 300);
  });
}
