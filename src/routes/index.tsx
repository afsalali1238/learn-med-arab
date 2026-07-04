import { createFileRoute } from "@tanstack/react-router";
import { CourseApp } from "@/components/course/CourseApp";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <CourseApp />;
}
