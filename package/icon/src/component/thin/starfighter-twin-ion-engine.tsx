
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `starfighter-twin-ion-engine` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/starfighter-twin-ion-engine?s=thin starfighter-twin-ion-engine}
 * @preview ![starfighter-twin-ion-engine](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NTIgMzJDNTQ3LjU3OCAzMiA1NDQgMzUuNTk0IDU0NCA0MFYyMDQuMzk4TDQyNi45MTYgMTc4LjA0M0MzOTkuNDk0IDEyOS4zMDkgMzQ3LjkwMiA5NiAyODggOTZTMTc2LjUwNiAxMjkuMzA5IDE0OS4wODQgMTc4LjA0M0wzMiAyMDQuMzk4VjQwQzMyIDM1LjU5NCAyOC40MjIgMzIgMjQgMzJTMTYgMzUuNTk0IDE2IDQwVjQ3MkMxNiA0NzYuNDA2IDE5LjU3OCA0ODAgMjQgNDgwUzMyIDQ3Ni40MDYgMzIgNDcyVjMwNy42MDJMMTQ5LjA4NCAzMzMuOTU3QzE3Ni41MDYgMzgyLjY5MSAyMjguMDk4IDQxNiAyODggNDE2UzM5OS40OTQgMzgyLjY5MSA0MjYuOTE2IDMzMy45NTdMNTQ0IDMwNy42MDJWNDcyQzU0NCA0NzYuNDA2IDU0Ny41NzggNDgwIDU1MiA0ODBTNTYwIDQ3Ni40MDYgNTYwIDQ3MlY0MEM1NjAgMzUuNTk0IDU1Ni40MjIgMzIgNTUyIDMyWk0xMzkuNjg5IDMxNS40MjhMMzIgMjkxLjE4OFYyMjAuODEyTDEzOS42ODkgMTk2LjU3MkMxMzIuMzA3IDIxNC45NzcgMTI4IDIzNC45NTcgMTI4IDI1NlMxMzIuMzA3IDI5Ny4wMjMgMTM5LjY4OSAzMTUuNDI4Wk0yODggNDAwQzIwOC41OTggNDAwIDE0NCAzMzUuNDAyIDE0NCAyNTZTMjA4LjU5OCAxMTIgMjg4IDExMlM0MzIgMTc2LjU5OCA0MzIgMjU2UzM2Ny40MDIgNDAwIDI4OCA0MDBaTTU0NCAyOTEuMTg4TDQzNi4zMTEgMzE1LjQyOEM0NDMuNjkzIDI5Ny4wMjMgNDQ4IDI3Ny4wNDMgNDQ4IDI1NlM0NDMuNjkzIDIxNC45NzcgNDM2LjMxMSAxOTYuNTcyTDU0NCAyMjAuODEyVjI5MS4xODhaTTI4OCAxNDRDMjI2LjE0NSAxNDQgMTc2IDE5NC4xNDUgMTc2IDI1NlMyMjYuMTQ1IDM2OCAyODggMzY4UzQwMCAzMTcuODU1IDQwMCAyNTZTMzQ5Ljg1NSAxNDQgMjg4IDE0NFpNMjk2IDE2MC44MDlDMzE2LjQwNiAxNjIuNTI5IDMzNC44NjcgMTcwLjUxOCAzNDkuNjU0IDE4My4wMzNMMzE1LjczNCAyMTYuOTY1QzMwOS45NjEgMjEyLjg1MiAzMDMuMjY4IDIxMC4wMzkgMjk2IDIwOC44MDlWMTYwLjgwOVpNMjgwIDE2MC44MDlWMjA4LjgwOUMyNzIuNzMyIDIxMC4wMzkgMjY2LjAzOSAyMTIuODUyIDI2MC4yNjYgMjE2Ljk2NUwyMjYuMzQ4IDE4My4wMzVDMjQxLjEzNSAxNzAuNTIgMjU5LjU5NCAxNjIuNTI5IDI4MCAxNjAuODA5Wk0yMTUuMDM1IDE5NC4zNDhMMjQ4Ljk1NSAyMjguMjc3QzI0NC44NDggMjM0LjA0NyAyNDIuMDM3IDI0MC43MzggMjQwLjgwOSAyNDhIMTkyLjgwOUMxOTQuNTI5IDIyNy41OTQgMjAyLjUyMSAyMDkuMTM1IDIxNS4wMzUgMTk0LjM0OFpNMTkyLjgwOSAyNjRIMjQwLjgwOUMyNDIuMDM3IDI3MS4yNjIgMjQ0Ljg0OCAyNzcuOTUzIDI0OC45NTUgMjgzLjcyM0wyMTUuMDM1IDMxNy42NTJDMjAyLjUyMSAzMDIuODY1IDE5NC41MjkgMjg0LjQwNiAxOTIuODA5IDI2NFpNMjgwIDM1MS4xOTFDMjU5LjU5NCAzNDkuNDcxIDI0MS4xMzUgMzQxLjQ4IDIyNi4zNDggMzI4Ljk2NUwyNjAuMjY2IDI5NS4wMzVDMjY2LjAzOSAyOTkuMTQ4IDI3Mi43MzIgMzAxLjk2MSAyODAgMzAzLjE5MVYzNTEuMTkxWk0yNTYgMjU2QzI1NiAyMzguMzI2IDI3MC4zMjggMjI0IDI4OCAyMjRDMzA1LjY3NCAyMjQgMzIwIDIzOC4zMjYgMzIwIDI1NlMzMDUuNjc0IDI4OCAyODggMjg4QzI3MC4zMjggMjg4IDI1NiAyNzMuNjc0IDI1NiAyNTZaTTI5NiAzNTEuMTkxVjMwMy4xOTFDMzAzLjI2OCAzMDEuOTYxIDMwOS45NjEgMjk5LjE0OCAzMTUuNzM0IDI5NS4wMzVMMzQ5LjY1NCAzMjguOTY3QzMzNC44NjcgMzQxLjQ4MiAzMTYuNDA2IDM0OS40NzEgMjk2IDM1MS4xOTFaTTM2MC45NjcgMzE3LjY1NEwzMjcuMDQ1IDI4My43MjNDMzMxLjE1MiAyNzcuOTUzIDMzMy45NjMgMjcxLjI2MiAzMzUuMTkxIDI2NEgzODMuMTkxQzM4MS40NzEgMjg0LjQwNiAzNzMuNDgyIDMwMi44NjcgMzYwLjk2NyAzMTcuNjU0Wk0zMzUuMTkxIDI0OEMzMzMuOTYzIDI0MC43MzggMzMxLjE1MiAyMzQuMDQ3IDMyNy4wNDUgMjI4LjI3N0wzNjAuOTY3IDE5NC4zNDZDMzczLjQ4MiAyMDkuMTMzIDM4MS40NzEgMjI3LjU5NCAzODMuMTkxIDI0OEgzMzUuMTkxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function StarfighterTwinIonEngine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M552 32C547.578 32 544 35.594 544 40V204.398L426.916 178.043C399.494 129.309 347.902 96 288 96S176.506 129.309 149.084 178.043L32 204.398V40C32 35.594 28.422 32 24 32S16 35.594 16 40V472C16 476.406 19.578 480 24 480S32 476.406 32 472V307.602L149.084 333.957C176.506 382.691 228.098 416 288 416S399.494 382.691 426.916 333.957L544 307.602V472C544 476.406 547.578 480 552 480S560 476.406 560 472V40C560 35.594 556.422 32 552 32ZM139.689 315.428L32 291.188V220.812L139.689 196.572C132.307 214.977 128 234.957 128 256S132.307 297.023 139.689 315.428ZM288 400C208.598 400 144 335.402 144 256S208.598 112 288 112S432 176.598 432 256S367.402 400 288 400ZM544 291.188L436.311 315.428C443.693 297.023 448 277.043 448 256S443.693 214.977 436.311 196.572L544 220.812V291.188ZM288 144C226.145 144 176 194.145 176 256S226.145 368 288 368S400 317.855 400 256S349.855 144 288 144ZM296 160.809C316.406 162.529 334.867 170.518 349.654 183.033L315.734 216.965C309.961 212.852 303.268 210.039 296 208.809V160.809ZM280 160.809V208.809C272.732 210.039 266.039 212.852 260.266 216.965L226.348 183.035C241.135 170.52 259.594 162.529 280 160.809ZM215.035 194.348L248.955 228.277C244.848 234.047 242.037 240.738 240.809 248H192.809C194.529 227.594 202.521 209.135 215.035 194.348ZM192.809 264H240.809C242.037 271.262 244.848 277.953 248.955 283.723L215.035 317.652C202.521 302.865 194.529 284.406 192.809 264ZM280 351.191C259.594 349.471 241.135 341.48 226.348 328.965L260.266 295.035C266.039 299.148 272.732 301.961 280 303.191V351.191ZM256 256C256 238.326 270.328 224 288 224C305.674 224 320 238.326 320 256S305.674 288 288 288C270.328 288 256 273.674 256 256ZM296 351.191V303.191C303.268 301.961 309.961 299.148 315.734 295.035L349.654 328.967C334.867 341.482 316.406 349.471 296 351.191ZM360.967 317.654L327.045 283.723C331.152 277.953 333.963 271.262 335.191 264H383.191C381.471 284.406 373.482 302.867 360.967 317.654ZM335.191 248C333.963 240.738 331.152 234.047 327.045 228.277L360.967 194.346C373.482 209.133 381.471 227.594 383.191 248H335.191Z" />
        </Icon>
    </>
}