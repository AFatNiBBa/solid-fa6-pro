
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `watch-calculator` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/watch-calculator?s=regular watch-calculator}
 * @preview ![watch-calculator](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDggMjQwSDE3NkMxNzEuNjI1IDI0MCAxNjggMjQzLjYyNSAxNjggMjQ4VjI4MEMxNjggMjg0LjM3NSAxNzEuNjI1IDI4OCAxNzYgMjg4SDIwOEMyMTIuMzc1IDI4OCAyMTYgMjg0LjM3NSAyMTYgMjgwVjI0OEMyMTYgMjQzLjYyNSAyMTIuMzc1IDI0MCAyMDggMjQwWk0yMDggMzIwSDE3NkMxNzEuNjI1IDMyMCAxNjggMzIzLjYyNSAxNjggMzI4VjM2MEMxNjggMzY0LjM3NSAxNzEuNjI1IDM2OCAxNzYgMzY4SDIwOEMyMTIuMzc1IDM2OCAyMTYgMzY0LjM3NSAyMTYgMzYwVjMyOEMyMTYgMzIzLjYyNSAyMTIuMzc1IDMyMCAyMDggMzIwWk0xMjggMjQwSDk2QzkxLjYyNSAyNDAgODggMjQzLjYyNSA4OCAyNDhWMjgwQzg4IDI4NC4zNzUgOTEuNjI1IDI4OCA5NiAyODhIMTI4QzEzMi4zNzUgMjg4IDEzNiAyODQuMzc1IDEzNiAyODBWMjQ4QzEzNiAyNDMuNjI1IDEzMi4zNzUgMjQwIDEyOCAyNDBaTTEyOCAzMjBIOTZDOTEuNjI1IDMyMCA4OCAzMjMuNjI1IDg4IDMyOFYzNjBDODggMzY0LjM3NSA5MS42MjUgMzY4IDk2IDM2OEgxMjhDMTMyLjM3NSAzNjggMTM2IDM2NC4zNzUgMTM2IDM2MFYzMjhDMTM2IDMyMy42MjUgMTMyLjM3NSAzMjAgMTI4IDMyMFpNMjg4IDI0MEgyNTZDMjUxLjYyNSAyNDAgMjQ4IDI0My42MjUgMjQ4IDI0OFYyODBDMjQ4IDI4NC4zNzUgMjUxLjYyNSAyODggMjU2IDI4OEgyODhDMjkyLjM3NSAyODggMjk2IDI4NC4zNzUgMjk2IDI4MFYyNDhDMjk2IDI0My42MjUgMjkyLjM3NSAyNDAgMjg4IDI0MFpNMjg4IDMyMEgyNTZDMjUxLjYyNSAzMjAgMjQ4IDMyMy42MjUgMjQ4IDMyOFYzNjBDMjQ4IDM2NC4zNzUgMjUxLjYyNSAzNjggMjU2IDM2OEgyODhDMjkyLjM3NSAzNjggMjk2IDM2NC4zNzUgMjk2IDM2MFYzMjhDMjk2IDMyMy42MjUgMjkyLjM3NSAzMjAgMjg4IDMyMFpNMjg4IDE0NEg5NkM5MS42MjUgMTQ0IDg4IDE0Ny42MjUgODggMTUyVjIwMEM4OCAyMDQuMzc1IDkxLjYyNSAyMDggOTYgMjA4SDI4OEMyOTIuMzc1IDIwOCAyOTYgMjA0LjM3NSAyOTYgMjAwVjE1MkMyOTYgMTQ3LjYyNSAyOTIuMzc1IDE0NCAyODggMTQ0Wk0zMjAgNzMuNjEzVjQ4QzMyMCAyMS42MDIgMjk4LjQgMCAyNzIgMEgxMTJDODUuNiAwIDY0IDIxLjYwMiA2NCA0OFY3My42MTNDMjcuNDg0IDgxLjAyNyAwIDExMy4yOTcgMCAxNTJWMzYwQzAgMzk4LjcwMyAyNy40ODQgNDMwLjk3MyA2NCA0MzguMzg3VjQ2NEM2NCA0OTAuMzk4IDg1LjYgNTEyIDExMiA1MTJIMjcyQzI5OC40IDUxMiAzMjAgNDkwLjM5OCAzMjAgNDY0VjQzOC4zODdDMzU2LjUxNiA0MzAuOTczIDM4NCAzOTguNzAzIDM4NCAzNjBWMTUyQzM4NCAxMTMuMjk3IDM1Ni41MTYgODEuMDI3IDMyMCA3My42MTNaTTMzNiAzNjBDMzM2IDM3Ny42NDUgMzIxLjY0NSAzOTIgMzA0IDM5Mkg4MEM2Mi4zNTUgMzkyIDQ4IDM3Ny42NDUgNDggMzYwVjE1MkM0OCAxMzQuMzU1IDYyLjM1NSAxMjAgODAgMTIwSDMwNEMzMjEuNjQ1IDEyMCAzMzYgMTM0LjM1NSAzMzYgMTUyVjM2MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function WatchCalculator(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M208 240H176C171.625 240 168 243.625 168 248V280C168 284.375 171.625 288 176 288H208C212.375 288 216 284.375 216 280V248C216 243.625 212.375 240 208 240ZM208 320H176C171.625 320 168 323.625 168 328V360C168 364.375 171.625 368 176 368H208C212.375 368 216 364.375 216 360V328C216 323.625 212.375 320 208 320ZM128 240H96C91.625 240 88 243.625 88 248V280C88 284.375 91.625 288 96 288H128C132.375 288 136 284.375 136 280V248C136 243.625 132.375 240 128 240ZM128 320H96C91.625 320 88 323.625 88 328V360C88 364.375 91.625 368 96 368H128C132.375 368 136 364.375 136 360V328C136 323.625 132.375 320 128 320ZM288 240H256C251.625 240 248 243.625 248 248V280C248 284.375 251.625 288 256 288H288C292.375 288 296 284.375 296 280V248C296 243.625 292.375 240 288 240ZM288 320H256C251.625 320 248 323.625 248 328V360C248 364.375 251.625 368 256 368H288C292.375 368 296 364.375 296 360V328C296 323.625 292.375 320 288 320ZM288 144H96C91.625 144 88 147.625 88 152V200C88 204.375 91.625 208 96 208H288C292.375 208 296 204.375 296 200V152C296 147.625 292.375 144 288 144ZM320 73.613V48C320 21.602 298.4 0 272 0H112C85.6 0 64 21.602 64 48V73.613C27.484 81.027 0 113.297 0 152V360C0 398.703 27.484 430.973 64 438.387V464C64 490.398 85.6 512 112 512H272C298.4 512 320 490.398 320 464V438.387C356.516 430.973 384 398.703 384 360V152C384 113.297 356.516 81.027 320 73.613ZM336 360C336 377.645 321.645 392 304 392H80C62.355 392 48 377.645 48 360V152C48 134.355 62.355 120 80 120H304C321.645 120 336 134.355 336 152V360Z" />
        </Icon>
    </>
}