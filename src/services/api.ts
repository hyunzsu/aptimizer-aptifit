// 로그인: 회원 정보 확인하는 함수
export const checkUser = async (phone: string) => {
  const data = { phone };

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_LOGIN_HANLA}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
