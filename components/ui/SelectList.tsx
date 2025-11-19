import { SelectFieldProps } from '@/lib/types'
import { Listbox, Field, Label, ListboxButton, ListboxOption, ListboxOptions  } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'


export default function SelectList({ data, label, selected, setSelected } : SelectFieldProps) {

    return (
        <Field>
            <Label>{label}</Label>
            <Listbox value={selected} onChange={setSelected}>
            <ListboxButton
                className={clsx(
                'relative block w-full rounded-xl bg-zinc-100 h-10 pl-8 pr-3 mt-2 text-right text-sm/6',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                )}
            >
                { selected ? selected.name : 'انتخاب کنید ...'}
                <ChevronDownIcon className="group pointer-events-none absolute top-2.5 left-2.5 size-4 fill-zinc-900/60" aria-hidden="true" />
                
            </ListboxButton>
            <ListboxOptions
                anchor="bottom"
                transition
                className={clsx(
                'w-[var(--button-width)] rounded-xl border border-white/5 bg-zinc-100 z-1000 overflow-auto mt-2 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none',
                'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
                )}
            >
                {data.map((person, index) => (
                <ListboxOption
                    key={index}
                    value={person}
                    className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                >
                    <CheckIcon className="invisible size-4 group-data-[selected]:visible" />
                    <div className="text-sm/6">{person.name}</div>
                </ListboxOption>
                ))}
            </ListboxOptions>
            </Listbox>
        </Field>
    )
}