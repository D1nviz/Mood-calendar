import { NextResponse } from "next/server";
import prisma from "@/components/lib/prismadb";

export async function POST(request: Request) {
  const body = await request.json();
  const { calendar } = body;

  try {
    // Create a new calendar entry
    const createdCalendar = await prisma.calendar.create({
      data: {
        user: { connect: { id: "userIdValue" } }, // Connect to the user by ID
        // ... other fields for the calendar
      },
    });

    // Create and associate day entries with the calendar
    for (const dayData of calendar.dates) {
      await prisma.day.create({
        data: {
          date: dayData.date,
          emojiId: dayData.emojiId,
          calendar: { connect: { id: createdCalendar.id } }, // Connect to the created calendar
        },
      });
    }

    return NextResponse.json(createdCalendar);
  } catch (error) {
    console.error("Error creating calendar:", error);
    
  }
}
