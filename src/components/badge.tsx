export default function Badge({
    children,
}: {
    children: React.ReactNode
}) {
    return <div className="rounded-xl bg-white text-black px-2 w-fit my-4">
        <h3>
            {children}
        </h3>
    </div>
}