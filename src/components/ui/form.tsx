import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input type="email" placeholder="Nama Lengkap" />
      <Button type="submit" variant="outline" className="cursor-none">
        Kirim
      </Button>
    </div>
  )
}
