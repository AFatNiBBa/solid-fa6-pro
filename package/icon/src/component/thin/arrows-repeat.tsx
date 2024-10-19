
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrows-repeat` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-repeat?s=thin arrows-repeat}
 * @preview ![arrows-repeat](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTkuNDI4IDEwMy45OTdMMzM4LjU5NCAxNzguMDkxQzMzNS4zNDQgMTgxLjA5MSAzMzUuMTA5IDE4Ni4xNTQgMzM4LjEwOSAxODkuNDA0QzMzOS42ODggMTkxLjEyMyAzNDEuODQ0IDE5MS45OTggMzQ0IDE5MS45OThDMzQ1LjkzOCAxOTEuOTk4IDM0Ny44NzUgMTkxLjMxIDM0OS40MDYgMTg5LjkwNEw0NDUuNDA2IDEwMS45MDNDNDQ3LjA2MiAxMDAuMzcyIDQ0OCA5OC4yNDcgNDQ4IDk1Ljk5N1M0NDcuMDYyIDkxLjYyMiA0NDUuNDA2IDkwLjA5MUwzNDkuNDA2IDIuMDlDMzQ2LjE4OCAtMC44NzkgMzQxLjEyNSAtMC42NiAzMzguMTA5IDIuNTlDMzM1LjEwOSA1Ljg0IDMzNS4zNDQgMTAuOTAyIDMzOC41OTQgMTMuOTAyTDQxOS40MjggODcuOTk3SDE2OEM3NS4zNTkgODcuOTk3IDAgMTYzLjM3MiAwIDI1NS45OThDMCAyNjAuNDA0IDMuNTc4IDI2My45OTggOCAyNjMuOTk4UzE2IDI2MC40MDQgMTYgMjU1Ljk5OEMxNiAxNzIuMTg1IDg0LjE4OCAxMDMuOTk3IDE2OCAxMDMuOTk3SDQxOS40MjhaTTUwNCAyNDcuOTk4QzQ5OS41NzggMjQ3Ljk5OCA0OTYgMjUxLjU5MiA0OTYgMjU1Ljk5OEM0OTYgMzM5LjgxMSA0MjcuODEyIDQwNy45OTkgMzQ0IDQwNy45OTlIOTIuNTcyTDE3My40MDYgMzMzLjkwNUMxNzYuNjU2IDMzMC45MDUgMTc2Ljg5MSAzMjUuODQyIDE3My44OTEgMzIyLjU5MkMxNzAuOTA2IDMxOS4zNDIgMTY1Ljg0NCAzMTkuMTI0IDE2Mi41OTQgMzIyLjA5Mkw2Ni41OTQgNDEwLjA5M0M2NC45MzggNDExLjYyNCA2NCA0MTMuNzQ5IDY0IDQxNS45OTlDNjQgNDE4LjI0OSA2NC45MzggNDIwLjM3NCA2Ni41OTQgNDIxLjkwNkwxNjIuNTk0IDUwOS45MDZDMTY0LjEyNSA1MTEuMzEyIDE2Ni4wNjIgNTEyIDE2OCA1MTJDMTcwLjE1NiA1MTIgMTcyLjMxMiA1MTEuMTI1IDE3My44OTEgNTA5LjQwNkMxNzYuODkxIDUwNi4xNTYgMTc2LjY1NiA1MDEuMDk0IDE3My40MDYgNDk4LjA5NEw5Mi41NzIgNDIzLjk5OUgzNDRDNDM2LjY0MSA0MjMuOTk5IDUxMiAzNDguNjI0IDUxMiAyNTUuOTk4QzUxMiAyNTEuNTkyIDUwOC40MjIgMjQ3Ljk5OCA1MDQgMjQ3Ljk5OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowsRepeat(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M419.428 103.997L338.594 178.091C335.344 181.091 335.109 186.154 338.109 189.404C339.688 191.123 341.844 191.998 344 191.998C345.938 191.998 347.875 191.31 349.406 189.904L445.406 101.903C447.062 100.372 448 98.247 448 95.997S447.062 91.622 445.406 90.091L349.406 2.09C346.188 -0.879 341.125 -0.66 338.109 2.59C335.109 5.84 335.344 10.902 338.594 13.902L419.428 87.997H168C75.359 87.997 0 163.372 0 255.998C0 260.404 3.578 263.998 8 263.998S16 260.404 16 255.998C16 172.185 84.188 103.997 168 103.997H419.428ZM504 247.998C499.578 247.998 496 251.592 496 255.998C496 339.811 427.812 407.999 344 407.999H92.572L173.406 333.905C176.656 330.905 176.891 325.842 173.891 322.592C170.906 319.342 165.844 319.124 162.594 322.092L66.594 410.093C64.938 411.624 64 413.749 64 415.999C64 418.249 64.938 420.374 66.594 421.906L162.594 509.906C164.125 511.312 166.062 512 168 512C170.156 512 172.312 511.125 173.891 509.406C176.891 506.156 176.656 501.094 173.406 498.094L92.572 423.999H344C436.641 423.999 512 348.624 512 255.998C512 251.592 508.422 247.998 504 247.998Z" />
        </Icon>
    </>
}