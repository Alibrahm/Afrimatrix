/* eslint-disable @typescript-eslint/ban-ts-comment */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import axios from "axios";

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const LIST_ID = 3;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    const response = await axios.post(
      "https://api.brevo.com/v3/contacts",
      {
        email,
        listIds: [LIST_ID],
        updateEnabled: true,
      },
      {
        headers: {
          "api-key": BREVO_API_KEY,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    return NextResponse.json(
      { message: "Successfully subscribed", data: response.data },
      { status: 200 }
    );
    //@ts-ignore 
  } catch (err: unknown) {
    let errorData;
    if (axios.isAxiosError(err)) {
      errorData = err.response?.data || { message: err.message };
    } else if (err instanceof Error) {
      errorData = { message: err.message };
    } else {
      errorData = { message: "An unknown error occurred" };
    }
    return NextResponse.json(
      { message: "Subscription failed", error: errorData },
      { status: 500 }
    );
  }
}
