
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hockey-mask` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hockey-mask?s=thin hockey-mask}
 * @preview ![hockey-mask](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMjM4LjE1NUM0NDggLTQuMjQ4IDIzMC4xNDcgMCAyMjQgMEMyMTcuODY3IDAgMCAtNC4yNTUgMCAyMzguMTU1QzAgMjg3Ljk2OCA5LjY4IDM0Ni45NDMgMzIuNjIxIDQxNS45OTJDNjQuNDk4IDUxMiAyMjQgNTEyIDIyNCA1MTJTMzgzLjUwNCA1MTIgNDE1LjM3OSA0MTUuOTkyQzQzOC4zMiAzNDYuOTQzIDQ0OCAyODcuOTY4IDQ0OCAyMzguMTU1Wk00MzIuMjI1IDIzNy44OTNDNDMyLjIyNSAyODQuMzU1IDQyMy4zMjUgMzQxLjMzMSA0MDAuMTk1IDQxMC45NDlDMzcyLjM1NSA0OTQuODAxIDIyNS40NjggNDk1Ljk5NiAyMjQuMDExIDQ5NkMyMjIuNTMzIDQ5NS45OTYgNzUuNjQ2IDQ5NC44MDEgNDcuODA0IDQxMC45NDlDMjQuNjc1IDM0MS4zMzEgMTUuNzc2IDI4NC4zNTUgMTUuNzc2IDIzNy44OTNDMTUuNzc2IDExLjUyOCAyMTcuNjE1IDE2IDIyNCAxNkMyMzAuNDIxIDE2IDQzMi4yMjUgMTEuNTE2IDQzMi4yMjUgMjM3Ljg5M1pNMjg4LjAwMiA5NS45NzdDMjk2Ljg3NyA5NS45NzcgMzA0LjAwMiA4OC44NDggMzA0LjAwMiA3OS45NzNTMjk2Ljg3NyA2My45NzMgMjg4LjAwMiA2My45NzNTMjcyLjAwMiA3MS4wOTggMjcyLjAwMiA3OS45NzNTMjc5LjEyNyA5NS45NzcgMjg4LjAwMiA5NS45NzdaTTE1OS45OTggOTUuOTc3QzE2OC44NzMgOTUuOTc3IDE3NS45OTggODguODQ4IDE3NS45OTggNzkuOTczUzE2OC44NzMgNjMuOTczIDE1OS45OTggNjMuOTczUzE0My45OTggNzEuMDk4IDE0My45OTggNzkuOTczUzE1MS4xMjMgOTUuOTc3IDE1OS45OTggOTUuOTc3Wk0xNjAgMTY3Ljk2OUg5NkM3My45MzcgMTY3Ljk2OSA1NiAxODUuOTA2IDU2IDIwNy45NjlDNTYgMjQ3LjY4OCA4OC4yOTcgMjgwIDEyOCAyODBTMjAwIDI0Ny42ODggMjAwIDIwNy45NjlDMjAwIDE4NS45MDYgMTgyLjA2MiAxNjcuOTY5IDE2MCAxNjcuOTY5Wk0xMjggMjY0Qzk3LjEyNSAyNjQgNzIgMjM4Ljg3NSA3MiAyMDcuOTY5QzcyIDE5NC43NSA4Mi43NjUgMTgzLjk2OSA5NiAxODMuOTY5SDE2MEMxNzMuMjM0IDE4My45NjkgMTg0IDE5NC43NSAxODQgMjA3Ljk2OUMxODQgMjM4Ljg3NSAxNTguODc1IDI2NCAxMjggMjY0Wk0xNzYgNDMxLjk5MkMxNjcuMTI1IDQzMS45OTIgMTYwIDQzOS4xMjEgMTYwIDQ0Ny45OTZTMTY3LjEyNSA0NjMuOTk2IDE3NiA0NjMuOTk2UzE5MiA0NTYuODcxIDE5MiA0NDcuOTk2UzE4NC44NzUgNDMxLjk5MiAxNzYgNDMxLjk5MlpNMTc2IDM2Ny45OTJDMTY3LjEyNSAzNjcuOTkyIDE2MCAzNzUuMTE3IDE2MCAzODMuOTkyUzE2Ny4xMjUgMzk5Ljk5MiAxNzYgMzk5Ljk5MlMxOTIgMzkyLjg2NyAxOTIgMzgzLjk5MlMxODQuODc1IDM2Ny45OTIgMTc2IDM2Ny45OTJaTTE3NiAzMDMuOTg0QzE2Ny4xMjUgMzAzLjk4NCAxNjAgMzExLjExMyAxNjAgMzE5Ljk4OFMxNjcuMTI1IDMzNS45ODggMTc2IDMzNS45ODhTMTkyIDMyOC44NjMgMTkyIDMxOS45ODhTMTg0Ljg3NSAzMDMuOTg0IDE3NiAzMDMuOTg0Wk0yMjQgMTExLjk3N0MyMTUuMTI1IDExMS45NzcgMjA4IDExOS4xMDIgMjA4IDEyNy45NzdTMjE1LjEyNSAxNDMuOTc3IDIyNCAxNDMuOTc3UzI0MCAxMzYuODUyIDI0MCAxMjcuOTc3UzIzMi44NzUgMTExLjk3NyAyMjQgMTExLjk3N1pNMjcyIDQzMS45OTJDMjYzLjEyNSA0MzEuOTkyIDI1NiA0MzkuMTIxIDI1NiA0NDcuOTk2UzI2My4xMjUgNDYzLjk5NiAyNzIgNDYzLjk5NlMyODggNDU2Ljg3MSAyODggNDQ3Ljk5NlMyODAuODc1IDQzMS45OTIgMjcyIDQzMS45OTJaTTI3MiAzNjcuOTkyQzI2My4xMjUgMzY3Ljk5MiAyNTYgMzc1LjExNyAyNTYgMzgzLjk5MlMyNjMuMTI1IDM5OS45OTIgMjcyIDM5OS45OTJTMjg4IDM5Mi44NjcgMjg4IDM4My45OTJTMjgwLjg3NSAzNjcuOTkyIDI3MiAzNjcuOTkyWk0yNzIgMzAzLjk4NEMyNjMuMTI1IDMwMy45ODQgMjU2IDMxMS4xMTMgMjU2IDMxOS45ODhTMjYzLjEyNSAzMzUuOTg4IDI3MiAzMzUuOTg4UzI4OCAzMjguODYzIDI4OCAzMTkuOTg4UzI4MC44NzUgMzAzLjk4NCAyNzIgMzAzLjk4NFpNMzUyIDE2Ny45NjlIMjg4QzI2NS45MzcgMTY3Ljk2OSAyNDggMTg1LjkwNiAyNDggMjA3Ljk2OUMyNDggMjQ3LjY4OCAyODAuMjk3IDI4MCAzMjAgMjgwUzM5MiAyNDcuNjg4IDM5MiAyMDcuOTY5QzM5MiAxODUuOTA2IDM3NC4wNjIgMTY3Ljk2OSAzNTIgMTY3Ljk2OVpNMzIwIDI2NEMyODkuMTI1IDI2NCAyNjQgMjM4Ljg3NSAyNjQgMjA3Ljk2OUMyNjQgMTk0Ljc1IDI3NC43NjUgMTgzLjk2OSAyODggMTgzLjk2OUgzNTJDMzY1LjIzNCAxODMuOTY5IDM3NiAxOTQuNzUgMzc2IDIwNy45NjlDMzc2IDIzOC44NzUgMzUwLjg3NSAyNjQgMzIwIDI2NFogIj48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
export default function HockeyMask(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448 238.155C448 -4.248 230.147 0 224 0C217.867 0 0 -4.255 0 238.155C0 287.968 9.68 346.943 32.621 415.992C64.498 512 224 512 224 512S383.504 512 415.379 415.992C438.32 346.943 448 287.968 448 238.155ZM432.225 237.893C432.225 284.355 423.325 341.331 400.195 410.949C372.355 494.801 225.468 495.996 224.011 496C222.533 495.996 75.646 494.801 47.804 410.949C24.675 341.331 15.776 284.355 15.776 237.893C15.776 11.528 217.615 16 224 16C230.421 16 432.225 11.516 432.225 237.893ZM288.002 95.977C296.877 95.977 304.002 88.848 304.002 79.973S296.877 63.973 288.002 63.973S272.002 71.098 272.002 79.973S279.127 95.977 288.002 95.977ZM159.998 95.977C168.873 95.977 175.998 88.848 175.998 79.973S168.873 63.973 159.998 63.973S143.998 71.098 143.998 79.973S151.123 95.977 159.998 95.977ZM160 167.969H96C73.937 167.969 56 185.906 56 207.969C56 247.688 88.297 280 128 280S200 247.688 200 207.969C200 185.906 182.062 167.969 160 167.969ZM128 264C97.125 264 72 238.875 72 207.969C72 194.75 82.765 183.969 96 183.969H160C173.234 183.969 184 194.75 184 207.969C184 238.875 158.875 264 128 264ZM176 431.992C167.125 431.992 160 439.121 160 447.996S167.125 463.996 176 463.996S192 456.871 192 447.996S184.875 431.992 176 431.992ZM176 367.992C167.125 367.992 160 375.117 160 383.992S167.125 399.992 176 399.992S192 392.867 192 383.992S184.875 367.992 176 367.992ZM176 303.984C167.125 303.984 160 311.113 160 319.988S167.125 335.988 176 335.988S192 328.863 192 319.988S184.875 303.984 176 303.984ZM224 111.977C215.125 111.977 208 119.102 208 127.977S215.125 143.977 224 143.977S240 136.852 240 127.977S232.875 111.977 224 111.977ZM272 431.992C263.125 431.992 256 439.121 256 447.996S263.125 463.996 272 463.996S288 456.871 288 447.996S280.875 431.992 272 431.992ZM272 367.992C263.125 367.992 256 375.117 256 383.992S263.125 399.992 272 399.992S288 392.867 288 383.992S280.875 367.992 272 367.992ZM272 303.984C263.125 303.984 256 311.113 256 319.988S263.125 335.988 272 335.988S288 328.863 288 319.988S280.875 303.984 272 303.984ZM352 167.969H288C265.937 167.969 248 185.906 248 207.969C248 247.688 280.297 280 320 280S392 247.688 392 207.969C392 185.906 374.062 167.969 352 167.969ZM320 264C289.125 264 264 238.875 264 207.969C264 194.75 274.765 183.969 288 183.969H352C365.234 183.969 376 194.75 376 207.969C376 238.875 350.875 264 320 264Z " />
        </Icon>
    </>
}