import { redirect } from "next/navigation";
import { lessonCalendar } from "../../monthly-data";

export default function LatestLessonsPage() { redirect(lessonCalendar.current.href); }
