/* eslint-disable @typescript-eslint/no-explicit-any */
import { useId } from "react"
import { Input } from "@/components/ui/input"
import { useController } from "react-hook-form";

export default function FromAndTo({ control }: { control: any }) {
  const id = useId()
  const { field: fromField } = useController({
    defaultValue: "Dhaka",
    name: "from",
    control,
  });

  const { field: toField } = useController({
    name: "to",
    control,
  });
  return (
    <div className="*:not-first:mt-2">
      <div className="flex">
        <Input
          id={`${id}-1`}
          className="h-14 w-[140px] rounded-r-none border-r-2 border-r-gray-300"
          placeholder="From"
          type="text"
          aria-label="from"
          {...fromField}
          required
        />
        <Input
          id={`${id}-2`}
          className="h-14 w-[140px] rounded-none rounded-r-lg md:rounded-r-none pe-9 lg:border-r-2 border-r-gray-300"
          placeholder="Where to?"
          type="text"
          aria-label="to"
          {...toField}
          required
        />
      </div>
    </div>
  )
}
