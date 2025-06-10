import { useCallStateHooks, CallingState } from "@stream-io/video-react-sdk"
import { Loader } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./ui/resizable"

const MeetingRoom = () => {
  const router = useRouter()
  const [layout, setLayout] = useState<"grid" | "speaker">('speaker')
  const [showParticipants, setShowParticipants] = useState(false)
  const { useCallCallingState } = useCallStateHooks()
  const callingState = useCallCallingState()
  if (callingState !== CallingState.JOINED) {
    return (
      <div className="h-96 flex items-center justify-center">
        <Loader className="size-6 animate-spin" />
      </div>
    )
  }


  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={35} minSize={25} maxSize={100} className="relative">
        <h1>Video will go here</h1>
      </ResizablePanel>
      <ResizableHandle withHandle />

      <ResizablePanel defaultSize={65} minSize={25}>
        <h1>Code Editor Will Go Here</h1>

      </ResizablePanel>

    </ResizablePanelGroup>
  )
}

export default MeetingRoom
