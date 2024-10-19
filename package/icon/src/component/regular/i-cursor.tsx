
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `i-cursor` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/i-cursor?s=regular i-cursor}
 * @preview ![i-cursor](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgNDg4QzI1NiA1MDEuMjUgMjQ1LjI1IDUxMiAyMzIgNTEyQzE4OS4wNyA1MTIgMTUxLjIzIDQ5MC41OTggMTI4IDQ1OC4wODRDMTA0Ljc3IDQ5MC41OTggNjYuOTMgNTEyIDI0IDUxMkMxMC43NSA1MTIgMCA1MDEuMjUgMCA0ODhTMTAuNzUgNDY0IDI0IDQ2NEM2OC4xMjUgNDY0IDEwNCA0MjguMTI1IDEwNCAzODRWMjgwSDcyQzU4Ljc1IDI4MCA0OCAyNjkuMjUgNDggMjU2UzU4Ljc1IDIzMiA3MiAyMzJIMTA0VjEyOEMxMDQgODMuODc1IDY4LjEyNSA0OCAyNCA0OEMxMC43NSA0OCAwIDM3LjI1IDAgMjRTMTAuNzUgMCAyNCAwQzY2LjkzIDAgMTA0Ljc3IDIxLjQwMiAxMjggNTMuOTE2QzE1MS4yMyAyMS40MDIgMTg5LjA3IDAgMjMyIDBDMjQ1LjI1IDAgMjU2IDEwLjc1IDI1NiAyNFMyNDUuMjUgNDggMjMyIDQ4QzE4Ny44NzUgNDggMTUyIDgzLjg3NSAxNTIgMTI4VjIzMkgxODRDMTk3LjI1IDIzMiAyMDggMjQyLjc1IDIwOCAyNTZTMTk3LjI1IDI4MCAxODQgMjgwSDE1MlYzODRDMTUyIDQyOC4xMjUgMTg3Ljg3NSA0NjQgMjMyIDQ2NEMyNDUuMjUgNDY0IDI1NiA0NzQuNzUgMjU2IDQ4OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ICursor(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path d="M256 488C256 501.25 245.25 512 232 512C189.07 512 151.23 490.598 128 458.084C104.77 490.598 66.93 512 24 512C10.75 512 0 501.25 0 488S10.75 464 24 464C68.125 464 104 428.125 104 384V280H72C58.75 280 48 269.25 48 256S58.75 232 72 232H104V128C104 83.875 68.125 48 24 48C10.75 48 0 37.25 0 24S10.75 0 24 0C66.93 0 104.77 21.402 128 53.916C151.23 21.402 189.07 0 232 0C245.25 0 256 10.75 256 24S245.25 48 232 48C187.875 48 152 83.875 152 128V232H184C197.25 232 208 242.75 208 256S197.25 280 184 280H152V384C152 428.125 187.875 464 232 464C245.25 464 256 474.75 256 488Z" />
        </Icon>
    </>
}