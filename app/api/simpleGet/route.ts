import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return Response.json({
    message: "Hello",
    searchParams: req.nextUrl.searchParams.toString(),
  });
}
