
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `screwdriver-wrench` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/screwdriver-wrench?s=light screwdriver-wrench}
 * @preview ![screwdriver-wrench](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjUuMDYyIDM3OC4xMTNDMjE5LjcxNyAzNjguODM2IDIwNy4zOTUgMzY2LjYzMyAxOTkuODIyIDM3NC4yMDNMMTA4LjI1MiA0NjUuNzU4QzkzLjI0NCA0ODAuNzU4IDY5LjM1MiA0ODQuNTQ3IDUxLjcxNSA0NzIuNzQyQzI4LjAwMiA0NTYuODY3IDI1LjY4IDQyMy45OCA0NC43NDggNDA0Ljc3M0wxNzkuNTU3IDI2OS45OTZDMTg1Ljc5OSAyNjMuNzU4IDE4NS43ODUgMjUzLjYzMyAxNzkuNTI1IDI0Ny40MDZDMTczLjI5MSAyNDEuMjExIDE2My4yMTMgMjQxLjIyMyAxNTYuOTk2IDI0Ny40MzhMMjIuMjUgMzgyLjE1NkMtNy4zNzUgNDExLjc3MyAtNy4zNzUgNDYwLjAxMiAyMi4yNSA0ODkuNjMzQzM4Ljg4OSA1MDYuNDE0IDYyLjE3NiA1MTQuMzMyIDg2LjEzOSA1MTEuMjAzQzEwMy41NjQgNTA4LjkzIDExOS40MSA0OTkuODQgMTMxLjgzNiA0ODcuNDE0TDIyMi4zNzUgMzk2Ljg5OEMyMjcuMjU4IDM5Mi4wMTYgMjI4LjY5NSAzODQuMzc1IDIyNS4yMzIgMzc4LjQwNkMyMjUuMTc2IDM3OC4zMDUgMjI1LjExOSAzNzguMjExIDIyNS4wNjIgMzc4LjExM1pNMjU5Ljc2NCA4OC42NTZDMjY0LjQ2MSA4MC44MzYgMjcwLjExNSA3My41MTIgMjc2Ljc0MiA2Ni44NTlDMjk5LjQ5IDQ0LjIzOCAzMjkuMzY1IDMxLjk5MiAzNjAuNjEzIDMxLjk5MkMzNjcuNDg4IDMxLjk5MiAzNzQuMzYzIDMyLjYxNyAzODEuMjM4IDMzLjc0MkwzMTEuOTkgMTAzLjIyN0wzMjUuNzQgMTg2LjIwM0w0MDguODYzIDE5OS45NTNMNDc4LjIzNCAxMzAuNzE5QzQ4NC44NTkgMTY4LjgzNiA0NzIuODYxIDIwNy40NDkgNDQ1LjExMSAyMzUuMTkxQzQ0MC42OCAyMzkuNjI1IDQzNS45MDQgMjQzLjYxNyA0MzAuODc5IDI0Ny4xOTVDNDIzLjEwNCAyNTIuNzIzIDQyMi42MzkgMjY0LjE3MiA0MjkuNDA0IDI3MC44OThMNDI5LjYzMyAyNzEuMTI1QzQzNS4yNTggMjc2LjcxOSA0NDQuMDUxIDI3Ny4xNTYgNDUwLjQ3MyAyNzIuNUM0NTYuNTE4IDI2OC4xMTcgNDYyLjI5MSAyNjMuMjA3IDQ2Ny43MzYgMjU3LjY4OEM1MDUuNDg0IDIxOS45NDUgNTIwLjM1OSAxNjYuMzM2IDUwNy4zNTkgMTE0LjQ2OUM1MDUuMTA5IDEwNC45NzcgNDk3LjczNCA5Ny40NzcgNDg4LjIzNCA5NC44NTJTNDY4LjYxMSA5NC44NTIgNDYxLjYxMSAxMDEuODUyTDM5Ny43MzggMTY1LjcxMUwzNTMuNDg4IDE1OC4zMzZMMzQ2LjExNSAxMTQuMjE5TDQwOS45ODggNTAuMjM0QzQxNi44NjEgNDMuMzYzIDQxOS42MTEgMzMuMjQyIDQxNi45ODYgMjMuNzQyQzQxNC4zNjMgMTQuMjQ2IDQwNi43MzggNyAzOTcuMjM4IDQuNjI1QzM0NS42MTUgLTguMjUgMjkxLjk5IDYuNSAyNTQuMTE3IDQ0LjIzOEMyNDUuODQ4IDUyLjU4NiAyMzguOTU3IDYxLjg0NCAyMzMuMTMzIDcxLjYyNUMyMjkuMzQyIDc3Ljk5MiAyMzAuMDg0IDg2LjA3IDIzNS4zMjQgOTEuMzA5QzI0Mi40NTUgOTguNDM4IDI1NC41NzIgOTcuMzAxIDI1OS43NjQgODguNjU2Wk02My45OTggNDMxLjg5NUM2My45OTggNDQwLjY0MSA3MS4yNDggNDQ3Ljg5MSA3OS45OTggNDQ3Ljg5MVM5NS45OTYgNDQwLjY0MSA5NS45OTYgNDMxLjg5NVM4OC43NDggNDE1Ljg5OCA3OS45OTggNDE1Ljg5OFM2My45OTggNDIzLjE0OCA2My45OTggNDMxLjg5NVpNNTAyLjYwOSAzODkuNDA2TDM3OC4yMzggMjY0LjkzOEMzNjIuNjEzIDI0OS4zMTMgMzQyLjExNSAyNDEuNTY2IDMyMS42MTUgMjQxLjU2NkMzMDYuMjQgMjQxLjU2NiAyOTAuNzQgMjQ1LjkzOCAyNzcuNDkyIDI1NC44MTJMMTkxLjk5NCAxNjkuMzM2Vjk1Ljk3N0w2My45OTggMEwwIDYzLjk4NEw5NS45OTYgMTkxLjk1M0gxNjkuMzY5TDI1NC44NjcgMjc3LjQzQzIzNC4yNDIgMzA4LjU0NyAyMzcuNzQyIDM1MC42NjQgMjY1LjExNyAzNzguMTU2TDM4OS42MTMgNTAyLjYyNUMzOTUuNzM4IDUwOC43NSA0MDMuOTg4IDUxMiA0MTIuMjM4IDUxMkM0MjAuMzYxIDUxMiA0MjguNjExIDUwOC44NzUgNDM0LjczNiA1MDIuNjI1TDUwMi43MzQgNDM0LjY0MUM1MTUuMTA5IDQyMi4xNDggNTE1LjEwOSA0MDEuOTAyIDUwMi42MDkgMzg5LjQwNlpNMTU5Ljk5NCAxNTkuOTYxSDExMS45OTZMNDIuMjQ4IDY2Ljk4NEw2Ni45OTggNDIuMjM4TDE1OS45OTQgMTExLjk3M1YxNTkuOTYxWk00MTIuMTEzIDQ3OS44ODNMMjg3Ljc0IDM1NS40MTRDMjc4LjYxNyAzNDYuMjg5IDI3My42MTcgMzM0LjI5MyAyNzMuNjE3IDMyMS41NDdDMjczLjYxNyAzMDguNjcyIDI3OC42MTcgMjk2LjY4IDI4Ny43NCAyODcuNjhDMjk2Ljc0IDI3OC41NTUgMzA4Ljc0IDI3My41NTkgMzIxLjYxNSAyNzMuNTU5QzMzNC4zNjUgMjczLjU1OSAzNDYuNDkgMjc4LjU1NSAzNTUuNDg4IDI4Ny42OEw0NzkuOTg0IDQxMi4wMjNMNDEyLjExMyA0NzkuODgzWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ScrewdriverWrench(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M225.062 378.113C219.717 368.836 207.395 366.633 199.822 374.203L108.252 465.758C93.244 480.758 69.352 484.547 51.715 472.742C28.002 456.867 25.68 423.98 44.748 404.773L179.557 269.996C185.799 263.758 185.785 253.633 179.525 247.406C173.291 241.211 163.213 241.223 156.996 247.438L22.25 382.156C-7.375 411.773 -7.375 460.012 22.25 489.633C38.889 506.414 62.176 514.332 86.139 511.203C103.564 508.93 119.41 499.84 131.836 487.414L222.375 396.898C227.258 392.016 228.695 384.375 225.232 378.406C225.176 378.305 225.119 378.211 225.062 378.113ZM259.764 88.656C264.461 80.836 270.115 73.512 276.742 66.859C299.49 44.238 329.365 31.992 360.613 31.992C367.488 31.992 374.363 32.617 381.238 33.742L311.99 103.227L325.74 186.203L408.863 199.953L478.234 130.719C484.859 168.836 472.861 207.449 445.111 235.191C440.68 239.625 435.904 243.617 430.879 247.195C423.104 252.723 422.639 264.172 429.404 270.898L429.633 271.125C435.258 276.719 444.051 277.156 450.473 272.5C456.518 268.117 462.291 263.207 467.736 257.688C505.484 219.945 520.359 166.336 507.359 114.469C505.109 104.977 497.734 97.477 488.234 94.852S468.611 94.852 461.611 101.852L397.738 165.711L353.488 158.336L346.115 114.219L409.988 50.234C416.861 43.363 419.611 33.242 416.986 23.742C414.363 14.246 406.738 7 397.238 4.625C345.615 -8.25 291.99 6.5 254.117 44.238C245.848 52.586 238.957 61.844 233.133 71.625C229.342 77.992 230.084 86.07 235.324 91.309C242.455 98.438 254.572 97.301 259.764 88.656ZM63.998 431.895C63.998 440.641 71.248 447.891 79.998 447.891S95.996 440.641 95.996 431.895S88.748 415.898 79.998 415.898S63.998 423.148 63.998 431.895ZM502.609 389.406L378.238 264.938C362.613 249.313 342.115 241.566 321.615 241.566C306.24 241.566 290.74 245.938 277.492 254.812L191.994 169.336V95.977L63.998 0L0 63.984L95.996 191.953H169.369L254.867 277.43C234.242 308.547 237.742 350.664 265.117 378.156L389.613 502.625C395.738 508.75 403.988 512 412.238 512C420.361 512 428.611 508.875 434.736 502.625L502.734 434.641C515.109 422.148 515.109 401.902 502.609 389.406ZM159.994 159.961H111.996L42.248 66.984L66.998 42.238L159.994 111.973V159.961ZM412.113 479.883L287.74 355.414C278.617 346.289 273.617 334.293 273.617 321.547C273.617 308.672 278.617 296.68 287.74 287.68C296.74 278.555 308.74 273.559 321.615 273.559C334.365 273.559 346.49 278.555 355.488 287.68L479.984 412.023L412.113 479.883Z" />
        </Icon>
    </>
}