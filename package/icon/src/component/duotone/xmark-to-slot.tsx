
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `xmark-to-slot` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/xmark-to-slot?s=duotone xmark-to-slot}
 * @preview ![xmark-to-slot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQzMiAzMkgxNDRDMTE3LjQ5IDMyIDk2IDUzLjQ5MiA5NiA4MFY0MDBINDgwVjgwQzQ4MCA1My40OTIgNDU4LjUxIDMyIDQzMiAzMlpNMzY4Ljk2OSAyNjMuMDMxQzM3OC4zNDQgMjcyLjQwNiAzNzguMzQ0IDI4Ny41OTQgMzY4Ljk2OSAyOTYuOTY5QzM1OS41ODggMzA2LjM0OCAzNDQuNDA0IDMwNi4zNCAzMzUuMDMxIDI5Ni45NjlMMjg4IDI0OS45MzhMMjQwLjk2OSAyOTYuOTY5QzIzMS41ODggMzA2LjM0OCAyMTYuNDA0IDMwNi4zNCAyMDcuMDMxIDI5Ni45NjlDMTk3LjY1NiAyODcuNTk0IDE5Ny42NTYgMjcyLjQwNiAyMDcuMDMxIDI2My4wMzFMMjU0LjA2MiAyMTZMMjA3LjAzMSAxNjguOTY5QzE5Ny42NTYgMTU5LjU5NCAxOTcuNjU2IDE0NC40MDYgMjA3LjAzMSAxMzUuMDMxUzIzMS41OTQgMTI1LjY1NiAyNDAuOTY5IDEzNS4wMzFMMjg4IDE4Mi4wNjJMMzM1LjAzMSAxMzUuMDMxQzM0NC40MDYgMTI1LjY1NiAzNTkuNTk0IDEyNS42NTYgMzY4Ljk2OSAxMzUuMDMxUzM3OC4zNDQgMTU5LjU5NCAzNjguOTY5IDE2OC45NjlMMzIxLjkzOCAyMTZMMzY4Ljk2OSAyNjMuMDMxWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik01MjggMjg4SDQ4MFYzNjhINDk2QzUwNC44MzYgMzY4IDUxMiAzNzUuMTY0IDUxMiAzODRTNTA0LjgzNiA0MDAgNDk2IDQwMEg4MEM3MS4xNjQgNDAwIDY0IDM5Mi44MzYgNjQgMzg0UzcxLjE2NCAzNjggODAgMzY4SDk2VjI4OEg0OEMyMS40OTIgMjg4IDAgMzA5LjQ5MiAwIDMzNlY0MzJDMCA0NTguNTA4IDIxLjQ5MiA0ODAgNDggNDgwSDUyOEM1NTQuNTA4IDQ4MCA1NzYgNDU4LjUwOCA1NzYgNDMyVjMzNkM1NzYgMzA5LjQ5MiA1NTQuNTA4IDI4OCA1MjggMjg4Wk0yMDcuMDMxIDI5Ni45NjlDMjE2LjQwNCAzMDYuMzQgMjMxLjU4OCAzMDYuMzQ4IDI0MC45NjkgMjk2Ljk2OUwyODggMjQ5LjkzN0wzMzUuMDMxIDI5Ni45NjlDMzQ0LjQwNCAzMDYuMzQgMzU5LjU4OCAzMDYuMzQ4IDM2OC45NjkgMjk2Ljk2OUMzNzguMzQ0IDI4Ny41OTQgMzc4LjM0NCAyNzIuNDA2IDM2OC45NjkgMjYzLjAzMUwzMjEuOTM4IDIxNkwzNjguOTY5IDE2OC45NjlDMzc4LjM0NCAxNTkuNTk0IDM3OC4zNDQgMTQ0LjQwNiAzNjguOTY5IDEzNS4wMzFTMzQ0LjQwNiAxMjUuNjU2IDMzNS4wMzEgMTM1LjAzMUwyODggMTgyLjA2MkwyNDAuOTY5IDEzNS4wMzFDMjMxLjU5NCAxMjUuNjU2IDIxNi40MDYgMTI1LjY1NiAyMDcuMDMxIDEzNS4wMzFTMTk3LjY1NiAxNTkuNTk0IDIwNy4wMzEgMTY4Ljk2OUwyNTQuMDYyIDIxNkwyMDcuMDMxIDI2My4wMzFDMTk3LjY1NiAyNzIuNDA2IDE5Ny42NTYgMjg3LjU5NCAyMDcuMDMxIDI5Ni45NjlaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function XmarkToSlot(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M432 32H144C117.49 32 96 53.492 96 80V400H480V80C480 53.492 458.51 32 432 32ZM368.969 263.031C378.344 272.406 378.344 287.594 368.969 296.969C359.588 306.348 344.404 306.34 335.031 296.969L288 249.938L240.969 296.969C231.588 306.348 216.404 306.34 207.031 296.969C197.656 287.594 197.656 272.406 207.031 263.031L254.062 216L207.031 168.969C197.656 159.594 197.656 144.406 207.031 135.031S231.594 125.656 240.969 135.031L288 182.062L335.031 135.031C344.406 125.656 359.594 125.656 368.969 135.031S378.344 159.594 368.969 168.969L321.938 216L368.969 263.031Z" />
            <path d="M528 288H480V368H496C504.836 368 512 375.164 512 384S504.836 400 496 400H80C71.164 400 64 392.836 64 384S71.164 368 80 368H96V288H48C21.492 288 0 309.492 0 336V432C0 458.508 21.492 480 48 480H528C554.508 480 576 458.508 576 432V336C576 309.492 554.508 288 528 288ZM207.031 296.969C216.404 306.34 231.588 306.348 240.969 296.969L288 249.937L335.031 296.969C344.404 306.34 359.588 306.348 368.969 296.969C378.344 287.594 378.344 272.406 368.969 263.031L321.938 216L368.969 168.969C378.344 159.594 378.344 144.406 368.969 135.031S344.406 125.656 335.031 135.031L288 182.062L240.969 135.031C231.594 125.656 216.406 125.656 207.031 135.031S197.656 159.594 207.031 168.969L254.062 216L207.031 263.031C197.656 272.406 197.656 287.594 207.031 296.969Z" />
        </Icon>
    </>
}