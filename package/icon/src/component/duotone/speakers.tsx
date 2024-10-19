
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `speakers` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/speakers?s=duotone speakers}
 * @preview ![speakers](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE3NS44NDQgMjI0QzIwMS45MDYgMjI0IDIzNy44MTIgMjM5LjE0MSAyNTYgMjU3Ljc4MVY0OEMyNTYuMDYyIDMzLjIxOSAyNjMuNDA2IDExLjcxOSAyNzIuNDA2IDBINDhDMjEuNSAwIDAgMjEuNSAwIDQ4VjQ2NEMwIDQ5MC41IDIxLjUgNTEyIDQ4IDUxMkgyNzIuNDA2QzI2My40MDYgNTAwLjI4MSAyNTYuMDYyIDQ3OC43ODEgMjU2IDQ2NFY0MTQuMjE5QzIzNy44MTIgNDMyLjg1OSAyMDEuOTA2IDQ0OCAxNzUuODQ0IDQ0OEMxMTMuOTk5IDQ0OCA2My44NDQgMzk3LjgyOCA2My44NDQgMzM2UzExMy45OTkgMjI0IDE3NS44NDQgMjI0Wk0xNzYgNjRDMjAyLjUgNjQgMjI0IDg1LjUgMjI0IDExMlMyMDIuNSAxNjAgMTc2IDE2MFMxMjggMTM4LjUgMTI4IDExMlMxNDkuNSA2NCAxNzYgNjRaTTU5MiAwSDMzNkMzMDkuNSAwIDI4OCAyMS41IDI4OCA0OFY0NjRDMjg4IDQ5MC41IDMwOS41IDUxMiAzMzYgNTEySDU5MkM2MTguNSA1MTIgNjQwIDQ5MC41IDY0MCA0NjRWNDhDNjQwIDIxLjUgNjE4LjUgMCA1OTIgMFpNNDY0IDY0QzQ5MC41IDY0IDUxMiA4NS41IDUxMiAxMTJTNDkwLjUgMTYwIDQ2NCAxNjBTNDE2IDEzOC41IDQxNiAxMTJTNDM3LjUgNjQgNDY0IDY0Wk00NjQgNDQ4QzQwMi4xODggNDQ4IDM1MiAzOTcuODI4IDM1MiAzMzZTNDAyLjE4OCAyMjQgNDY0IDIyNFM1NzYgMjc0LjE3MiA1NzYgMzM2UzUyNS44MTIgNDQ4IDQ2NCA0NDhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQ2NCAxNjBDNDkwLjUgMTYwIDUxMiAxMzguNSA1MTIgMTEyUzQ5MC41IDY0IDQ2NCA2NFM0MTYgODUuNSA0MTYgMTEyUzQzNy41IDE2MCA0NjQgMTYwWk00NjQgMjI0QzQwMi4xODggMjI0IDM1MiAyNzQuMTcyIDM1MiAzMzZTNDAyLjE4OCA0NDggNDY0IDQ0OFM1NzYgMzk3LjgyOCA1NzYgMzM2UzUyNS44MTIgMjI0IDQ2NCAyMjRaTTQ2NCA0MDBDNDI4LjY4OCA0MDAgNDAwIDM3MS4zMjggNDAwIDMzNlM0MjguNjg4IDI3MiA0NjQgMjcyUzUyOCAzMDAuNjcyIDUyOCAzMzZTNDk5LjMxMiA0MDAgNDY0IDQwMFpNMTc2IDE2MEMyMDIuNSAxNjAgMjI0IDEzOC41IDIyNCAxMTJTMjAyLjUgNjQgMTc2IDY0UzEyOCA4NS41IDEyOCAxMTJTMTQ5LjUgMTYwIDE3NiAxNjBaTTY0IDMzNkM2NCAzOTcuODI4IDExNC4xODggNDQ4IDE3NiA0NDhDMjA3LjM2OSA0NDggMjM1LjY2IDQzNSAyNTYgNDE0LjE5MVYyNTcuODA5QzIzNS42NiAyMzcgMjA3LjM2OSAyMjQgMTc2IDIyNEMxMTQuMTg4IDIyNCA2NCAyNzQuMTcyIDY0IDMzNlpNMjQwIDMzNkMyNDAgMzcxLjMyOCAyMTEuMzEyIDQwMCAxNzYgNDAwUzExMiAzNzEuMzI4IDExMiAzMzZTMTQwLjY4OCAyNzIgMTc2IDI3MlMyNDAgMzAwLjY3MiAyNDAgMzM2WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Speakers(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M175.844 224C201.906 224 237.812 239.141 256 257.781V48C256.062 33.219 263.406 11.719 272.406 0H48C21.5 0 0 21.5 0 48V464C0 490.5 21.5 512 48 512H272.406C263.406 500.281 256.062 478.781 256 464V414.219C237.812 432.859 201.906 448 175.844 448C113.999 448 63.844 397.828 63.844 336S113.999 224 175.844 224ZM176 64C202.5 64 224 85.5 224 112S202.5 160 176 160S128 138.5 128 112S149.5 64 176 64ZM592 0H336C309.5 0 288 21.5 288 48V464C288 490.5 309.5 512 336 512H592C618.5 512 640 490.5 640 464V48C640 21.5 618.5 0 592 0ZM464 64C490.5 64 512 85.5 512 112S490.5 160 464 160S416 138.5 416 112S437.5 64 464 64ZM464 448C402.188 448 352 397.828 352 336S402.188 224 464 224S576 274.172 576 336S525.812 448 464 448Z" />
            <path d="M464 160C490.5 160 512 138.5 512 112S490.5 64 464 64S416 85.5 416 112S437.5 160 464 160ZM464 224C402.188 224 352 274.172 352 336S402.188 448 464 448S576 397.828 576 336S525.812 224 464 224ZM464 400C428.688 400 400 371.328 400 336S428.688 272 464 272S528 300.672 528 336S499.312 400 464 400ZM176 160C202.5 160 224 138.5 224 112S202.5 64 176 64S128 85.5 128 112S149.5 160 176 160ZM64 336C64 397.828 114.188 448 176 448C207.369 448 235.66 435 256 414.191V257.809C235.66 237 207.369 224 176 224C114.188 224 64 274.172 64 336ZM240 336C240 371.328 211.312 400 176 400S112 371.328 112 336S140.688 272 176 272S240 300.672 240 336Z" />
        </Icon>
    </>
}