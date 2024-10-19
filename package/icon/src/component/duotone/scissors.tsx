
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `scissors` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scissors?s=duotone scissors}
 * @preview ![scissors](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIxNC4zMjMgMTU2Ljk1M0MyMzIuMzMxIDExNS45MjIgMjI0Ljc5IDY2LjM5OCAxOTEuMTk2IDMyLjgwNUMxNjkuMzI3IDEwLjkzNCAxNDAuNjYzIDAgMTEyIDBTNTQuNjc0IDEwLjkzNCAzMi44MDUgMzIuODA1Qy0xMC45MzUgNzYuNTQzIC0xMC45MzUgMTQ3LjQ1NyAzMi44MDUgMTkxLjE5NUM1NC42NzQgMjEzLjA2NiA4My4zMzggMjI0IDExMiAyMjRDMTIxLjg3NCAyMjQgMTMxLjYzNyAyMjIuMjE5IDE0MS4yMzMgMjE5LjYyNUwxNzcuNjA4IDI1NkwyNDUuNDg5IDE4OC4xMTdMMjE0LjMyMyAxNTYuOTUzWk0xMTIgMTYwQzg1LjQ1NiAxNjAgNjQgMTM4LjUxNiA2NCAxMTJDNjQgODUuNDUzIDg1LjQ4NyA2NCAxMTIgNjRDMTM4LjU0NSA2NCAxNjAgODUuNDg0IDE2MCAxMTJDMTYwIDEzOC41NDcgMTM4LjUxNCAxNjAgMTEyIDE2MFpNNTA3LjMxNSA0NDkuOTQxTDMxMy4zNzIgMjU2TDI0NS40ODkgMzIzLjg4M0wzOTQuMTc2IDQ3Mi41N0M0MjUuNDE4IDUwMy44MTMgNDc2LjA3MyA1MDMuODEzIDUwNy4zMTUgNDcyLjU3QzUxMy41NjMgNDY2LjMyIDUxMy41NjMgNDU2LjE4OCA1MDcuMzE1IDQ0OS45NDFaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTUwNy4zMTUgMzkuNDNDNDc2LjA3MyA4LjE4NyA0MjUuNDE4IDguMTg3IDM5NC4xNzYgMzkuNDNMMTQxLjIzMyAyOTIuMzc1QzEzMS42MzcgMjg5Ljc4MSAxMjEuODc0IDI4OCAxMTIgMjg4QzgzLjMzOCAyODggNTQuNjc0IDI5OC45MzQgMzIuODA1IDMyMC44MDVDLTEwLjkzNSAzNjQuNTQzIC0xMC45MzUgNDM1LjQ1NyAzMi44MDUgNDc5LjE5NUM1NC42NzQgNTAxLjA2NiA4My4zMzggNTEyIDExMiA1MTJTMTY5LjMyNyA1MDEuMDY2IDE5MS4xOTYgNDc5LjE5NUMyMjQuNzkgNDQ1LjYwMiAyMzIuMzMxIDM5Ni4wNzggMjE0LjMyMyAzNTUuMDQ3TDUwNy4zMTUgNjIuMDU5QzUxMy41NjMgNTUuODEyIDUxMy41NjMgNDUuNjggNTA3LjMxNSAzOS40M1pNMTEyIDQ0OEM4NS40ODcgNDQ4IDY0IDQyNi41NDcgNjQgNDAwQzY0IDM3My40ODQgODUuNDU2IDM1MiAxMTIgMzUyQzEzOC41MTQgMzUyIDE2MCAzNzMuNDUzIDE2MCA0MDBDMTYwIDQyNi41MTYgMTM4LjU0NSA0NDggMTEyIDQ0OFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Scissors(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M214.323 156.953C232.331 115.922 224.79 66.398 191.196 32.805C169.327 10.934 140.663 0 112 0S54.674 10.934 32.805 32.805C-10.935 76.543 -10.935 147.457 32.805 191.195C54.674 213.066 83.338 224 112 224C121.874 224 131.637 222.219 141.233 219.625L177.608 256L245.489 188.117L214.323 156.953ZM112 160C85.456 160 64 138.516 64 112C64 85.453 85.487 64 112 64C138.545 64 160 85.484 160 112C160 138.547 138.514 160 112 160ZM507.315 449.941L313.372 256L245.489 323.883L394.176 472.57C425.418 503.813 476.073 503.813 507.315 472.57C513.563 466.32 513.563 456.188 507.315 449.941Z" />
            <path d="M507.315 39.43C476.073 8.187 425.418 8.187 394.176 39.43L141.233 292.375C131.637 289.781 121.874 288 112 288C83.338 288 54.674 298.934 32.805 320.805C-10.935 364.543 -10.935 435.457 32.805 479.195C54.674 501.066 83.338 512 112 512S169.327 501.066 191.196 479.195C224.79 445.602 232.331 396.078 214.323 355.047L507.315 62.059C513.563 55.812 513.563 45.68 507.315 39.43ZM112 448C85.487 448 64 426.547 64 400C64 373.484 85.456 352 112 352C138.514 352 160 373.453 160 400C160 426.516 138.545 448 112 448Z" />
        </Icon>
    </>
}