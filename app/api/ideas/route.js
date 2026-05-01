import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectDB from "@/lib/mongodb";
import Idea from "@/models/Idea";

// GET — Fetch all ideas (public, newest first)
export async function GET() {
  try {
    await connectDB();

    const ideas = await Idea.find({}).sort({ createdAt: -1 }).lean();

    return NextResponse.json({ ideas }, { status: 200 });
  } catch (error) {
    console.error("Fetch ideas error:", error);
    return NextResponse.json(
      { error: "Failed to fetch ideas" },
      { status: 500 }
    );
  }
}

// POST — Create a new idea (authenticated)
export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { title, description, category } = await request.json();

    if (!title || !description) {
      return NextResponse.json(
        { error: "Title and description are required" },
        { status: 400 }
      );
    }

    await connectDB();

    const idea = await Idea.create({
      title,
      description,
      category: category || "Other",
      author: session.user.id,
      authorName: session.user.name,
      authorEmail: session.user.email,
    });

    return NextResponse.json(
      { message: "Idea created successfully", idea },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create idea error:", error);
    return NextResponse.json(
      { error: "Failed to create idea" },
      { status: 500 }
    );
  }
}
