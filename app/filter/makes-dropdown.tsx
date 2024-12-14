'use client'
import React, { FC, useState } from 'react'

import { ChevronDown, ChevronUp } from 'lucide-react'

import { Command, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

import { VehicleMake } from '../type'
import { MAX_VEHICLE_MAKES_SHOWN } from '../const'
import { Badge } from '@/components/ui/badge'

type MakesDropdownProps = {
    vehicleMakes: VehicleMake[]
    vehicleMake: VehicleMake | null
    setVehicleMake: (value: VehicleMake) => void
}

const MakesDropdown: FC<MakesDropdownProps> = ({ vehicleMakes, vehicleMake, setVehicleMake }) => {

    const [isSelectorOpen, setIsSelectorOpen] = useState<boolean>(false)

    return (
        <DropdownMenu onOpenChange={() => setIsSelectorOpen(prevState => !prevState)}>
            <DropdownMenuTrigger>
                <Badge
                    variant='outline'
                    className='w-40 flex justify-between font-normal text-base py-2'
                >
                    <span className='truncate max-w-[120px]'>
                        {vehicleMake ? vehicleMake.MakeName : 'Choose make'}
                    </span>
                    {isSelectorOpen ? (
                        <ChevronUp />
                    ) : (
                        <ChevronDown />
                    )}
                </Badge>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <Command>
                    <CommandInput placeholder="Start writing to find make..." />
                    <CommandList>
                        {vehicleMakes.slice(0, MAX_VEHICLE_MAKES_SHOWN).map((make: VehicleMake) =>
                            <CommandItem
                                key={make.MakeId}
                                onSelect={() => setVehicleMake(make)}
                            >
                                {make.MakeName}
                            </CommandItem>
                        )}
                    </CommandList>
                </Command>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default MakesDropdown