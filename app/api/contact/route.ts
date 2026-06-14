import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mailersend";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function corsHeaders(origin: string | null) {
  const allowed = process.env.CONTACT_CORS_ORIGIN;
  const allowOrigin =
    allowed && origin && (allowed === "*" || allowed.includes(origin))
      ? origin
      : allowed ?? "*";

  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export async function OPTIONS(request: Request) {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(request.headers.get("origin")),
  });
}

export async function POST(request: Request) {
  const headers = corsHeaders(request.headers.get("origin"));

  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      message?: string;
    };

    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Preencha nome, e-mail e mensagem." },
        { status: 400, headers },
      );
    }

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        { error: "Informe um e-mail válido." },
        { status: 400, headers },
      );
    }

    if (name.length > 120 || email.length > 254 || message.length > 5000) {
      return NextResponse.json(
        { error: "Mensagem muito longa." },
        { status: 400, headers },
      );
    }

    await sendContactEmail({ name, email, message });

    return NextResponse.json({ ok: true }, { headers });
  } catch (error) {
    console.error("[contact]", error);
    return NextResponse.json(
      { error: "Não foi possível enviar a mensagem." },
      { status: 500, headers },
    );
  }
}
