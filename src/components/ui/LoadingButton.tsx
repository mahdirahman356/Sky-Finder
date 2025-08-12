import { LoaderCircleIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function LoadingButton() {
  return (
    <Button disabled className="h-14 mt-3">
      <LoaderCircleIcon
        className="-ms-1 animate-spin"
        size={16}
        aria-hidden="true"
      />
      Explore
    </Button>
  )
}
