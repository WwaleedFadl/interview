'use client'

import LoaderUI from "@/components/LaderUI";
import { useUserRole } from "@/hooks/useUserRole";
import { useRouter } from "next/navigation";
import InterviewScheduleUI from "./InterviewScheduleUI";

const SchedulePage = () => {
  const router = useRouter()
  const { isInterviewer, isLoading } = useUserRole()
  if (isLoading) return <LoaderUI />
  if (!isInterviewer) return router.push('/')
  return <InterviewScheduleUI />;
};
export default SchedulePage;
