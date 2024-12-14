'use client'
import React, { FC, useState } from 'react'

import { ChevronDown, ChevronUp } from 'lucide-react'

import { Command, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

import { getYearList } from '@/util/get-year-list'
import { MAX_YEARS_SHOWN } from '../const'
import { Badge } from '@/components/ui/badge'

type YearsDropdownProps = {
    year: string | null
    setYear: (value: string) => void
    fromYear: number
}

const YearsDropdown: FC<YearsDropdownProps> = ({ year, setYear, fromYear }) => {

    const [isSelectorOpen, setIsSelectorOpen] = useState<boolean>(false)

    return (
        <DropdownMenu onOpenChange={() => setIsSelectorOpen(prevState => !prevState)}>
            <DropdownMenuTrigger>
                <Badge
                    variant='outline'
                    className='w-40 flex justify-between font-normal text-base py-1'
                >
                    <span className='truncate max-w-[120px]'>
                        {year ?? 'Choose year'}
                    </span>
                    {isSelectorOpen ? (
                        <ChevronUp />
                    ) : (
                        <ChevronDown />
                    )}
                </Badge >
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <Command>
                    <CommandInput placeholder="Start writing to find year..." />
                    <CommandList>
                        {getYearList(fromYear).slice(0, MAX_YEARS_SHOWN).map((year: string) =>
                            <CommandItem
                                key={year}
                                onSelect={() => setYear(year)}
                            >
                                {year}
                            </CommandItem>
                        )}
                    </CommandList>
                </Command>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default YearsDropdown