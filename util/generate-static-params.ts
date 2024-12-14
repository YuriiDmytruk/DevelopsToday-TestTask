export const generateStaticParams = ({
    year,
    makeId
}: {
    year: string
    makeId: string
}) => `/result/${makeId}/${year}`