import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LucideSend } from "lucide-react"


export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input type="email" placeholder="Nama Lengkap" />
        <Button className="cursor-none" type="submit" variant={"outline"}>
          Submit 
          <LucideSend/>
        </Button>
    </div>
  )
}
