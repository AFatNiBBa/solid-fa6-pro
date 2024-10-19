
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `share-from-square` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/share-from-square?s=thin share-from-square}
 * @preview ![share-from-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzkuOTg2IDM1MkM0MzUuNTggMzUyIDQzMS45ODYgMzU1LjU3OCA0MzEuOTg2IDM2MFY0NDBDNDMxLjk4NiA0NzAuODc1IDQwNi44NjMgNDk2IDM3NS45ODggNDk2SDcxLjk5OEM0MS4xMjMgNDk2IDE2IDQ3MC44NzUgMTYgNDQwVjEzNS45OTJDMTYgMTA1LjExMyA0MS4xMjMgNzkuOTg4IDcxLjk5OCA3OS45ODhIMjU2QzI2MC40MDYgNzkuOTg4IDI2NCA3Ni40MSAyNjQgNzEuOTg4UzI2MC40MDYgNjMuOTg4IDI1NiA2My45ODhINzEuOTk4QzMyLjMxMSA2My45ODggMCA5Ni4yODUgMCAxMzUuOTkyVjQ0MEMwIDQ3OS43MDMgMzIuMzExIDUxMiA3MS45OTggNTEySDM3NS45ODhDNDE1LjY3NiA1MTIgNDQ3Ljk4NiA0NzkuNzAzIDQ0Ny45ODYgNDQwVjM2MEM0NDcuOTg2IDM1NS41NzggNDQ0LjM5MyAzNTIgNDM5Ljk4NiAzNTJaTTU3My4zMjggMTM4LjAwOEw0MjEuMzI4IDEuOTk2QzQxOC4wNzggLTAuODc5IDQxMy4wMzEgLTAuNjI5IDQxMC4wMzEgMi42MjFDNDA3LjA5NCA1LjkzNCA0MDcuMzc1IDEwLjk5NiA0MTAuNjcyIDEzLjkzNEw1NDcuMDU5IDEzNS45NzdIMzQ0QzI2OS4wMTYgMTM1Ljk3NyAyMDggMTk2Ljk4NCAyMDggMjcxLjk5MlYzNDRDMjA4IDM0OC40MDYgMjExLjU3OCAzNTIgMjE2IDM1MlMyMjQgMzQ4LjQwNiAyMjQgMzQ0VjI3MS45OTJDMjI0IDIwNS44MjggMjc3LjgyOCAxNTEuOTggMzQ0IDE1MS45OEg1NDcuMDU5TDQxMC42NzIgMjc0LjAyM0M0MDcuMzc1IDI3Ni45NjEgNDA3LjA5NCAyODIuMDIzIDQxMC4wMzEgMjg1LjMzNkM0MTEuNjI1IDI4Ny4wODYgNDEzLjgxMiAyODcuOTkyIDQxNiAyODcuOTkyQzQxNy45MDYgMjg3Ljk5MiA0MTkuODEyIDI4Ny4zMDUgNDIxLjMyOCAyODUuOTYxTDU3My4zMjggMTQ5Ljk0NUM1NzUuMDMxIDE0OC40MTQgNTc2IDE0Ni4yNTggNTc2IDE0My45NzdTNTc1LjAzMSAxMzkuNTM5IDU3My4zMjggMTM4LjAwOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ShareFromSquare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M439.986 352C435.58 352 431.986 355.578 431.986 360V440C431.986 470.875 406.863 496 375.988 496H71.998C41.123 496 16 470.875 16 440V135.992C16 105.113 41.123 79.988 71.998 79.988H256C260.406 79.988 264 76.41 264 71.988S260.406 63.988 256 63.988H71.998C32.311 63.988 0 96.285 0 135.992V440C0 479.703 32.311 512 71.998 512H375.988C415.676 512 447.986 479.703 447.986 440V360C447.986 355.578 444.393 352 439.986 352ZM573.328 138.008L421.328 1.996C418.078 -0.879 413.031 -0.629 410.031 2.621C407.094 5.934 407.375 10.996 410.672 13.934L547.059 135.977H344C269.016 135.977 208 196.984 208 271.992V344C208 348.406 211.578 352 216 352S224 348.406 224 344V271.992C224 205.828 277.828 151.98 344 151.98H547.059L410.672 274.023C407.375 276.961 407.094 282.023 410.031 285.336C411.625 287.086 413.812 287.992 416 287.992C417.906 287.992 419.812 287.305 421.328 285.961L573.328 149.945C575.031 148.414 576 146.258 576 143.977S575.031 139.539 573.328 138.008Z" />
        </Icon>
    </>
}