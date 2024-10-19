
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `phone-missed` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/phone-missed?s=regular phone-missed}
 * @preview ![phone-missed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MjQuODc1IDM0My44NDRDNTQzLjU4NCAyNjEuMzc1IDQzNS4zMDkgMjE1Ljk2OSAzMTkuOTg5IDIxNS45NjlDMjA0LjY4NCAyMTUuOTY5IDk2LjQxIDI2MS4zNzUgMTUuMTE4IDM0My44NDRDLTEuODk2IDM2MS4xMjUgLTQuODgxIDM4Ny41NzggNy44NTMgNDA4LjE1Nkw1Ni42MTUgNDg3LjI1QzY5LjgxOCA1MDguNzgxIDk2LjQyNSA1MTcuNSAxMjAuMDE4IDUwOC4yNUwyMTcuNjY3IDQ2OC42NTZDMjM4LjgwNyA0NjAgMjUxLjk5MyA0MzcuOTY5IDI0OS43MjggNDE1LjA5NEwyNDUuNTA5IDM3Mi4xMDlDMjk0LjEzMSAzNTguODI4IDM0NS45MjUgMzU4Ljg1OSAzOTQuNjA5IDM3Mi4xMDlMMzkwLjQwNiA0MTQuOTA2QzM4Ny45NTMgNDM3Ljk2OSA0MDEuMjE4IDQ2MC4wOTQgNDIyLjU2IDQ2OC42ODhMNTIwLjA3IDUwOC4yMTlDNTI2LjM5NyA1MTAuNzgxIDUzMi45NTkgNTEyIDUzOS40MjggNTEyQzU1Ni44OTUgNTEyIDU3My42OTEgNTAzLjA2MiA1ODMuMzYyIDQ4Ny4zMTJMNjMyLjE0IDQwOC4xODhDNjQ0Ljg5IDM4Ny41NDcgNjQxLjg5IDM2MS4wNzggNjI0Ljg3NSAzNDMuODQ0Wk01OTEuMjk5IDM4Mi45ODRWMzgzTDU0Mi40OSA0NjIuMTU2QzU0MS41NjggNDYzLjcxOSA1MzkuNjMxIDQ2NC4zNDQgNTM4LjA4NCA0NjMuNzE5TDQ0MC41MTIgNDI0LjE1NkM0MzguOTk3IDQyMy41NjIgNDM3Ljk1IDQyMS43MTkgNDM4LjE1MyA0MTkuNzgxTDQ0NC4yOTMgMzU3LjMyOEM0NDUuMzcxIDM0Ni4yODEgNDM4Ljc0NyAzMzUuOTM3IDQyOC4yNjMgMzMyLjMxMkMzNTguNDU1IDMwOC4xMjUgMjgxLjYwMSAzMDguMTQxIDIxMS44NTUgMzMyLjI5N0MyMDEuMzcyIDMzNS45MjIgMTk0Ljc0NyAzNDYuMjY2IDE5NS44MjUgMzU3LjMxMkwyMDEuOTUgNDE5LjgxMkMyMDIuMTUzIDQyMS42ODcgMjAxLjEwNiA0MjMuNTYyIDE5OS41NTkgNDI0LjE4N0wxMDIuMTQ0IDQ2My42ODdDMTAwLjM2MyA0NjQuNDA2IDk4LjQ4OCA0NjMuNzUgOTcuNDg4IDQ2Mi4wOTRMNDguNjk0IDM4Mi45MzdDNDcuNiAzODEuMTcyIDQ3Ljg1IDM3OSA0OS4zMDMgMzc3LjUzMUMxMjEuNTAyIDMwNC4yOTcgMjE3LjYzNiAyNjMuOTY5IDMxOS45ODkgMjYzLjk2OUM0MjIuMzU3IDI2My45NjkgNTE4LjQ5MiAzMDQuMjk3IDU5MC43MDYgMzc3LjU0N0M1OTIuMTU5IDM3OS4wMTYgNTkyLjM5MyAzODEuMjAzIDU5MS4yOTkgMzgyLjk4NFpNMTIwLjAxOCAxNjBDMTMzLjI2NyAxNjAgMTQ0LjAxNiAxNDkuMjUgMTQ0LjAxNiAxMzZWODEuOTM4TDE5OS40NSAxMzcuMzc1QzIyOS4wNzMgMTY3IDI3MC4xMDEgMTg0IDMxMi4wMDUgMTg0UzM5NC45MzcgMTY3IDQyNC41NiAxMzcuMzc1TDUxMi45NjEgNDguOTY5QzUyMi4zMzUgMzkuNTk0IDUyMi4zMzUgMjQuNDA2IDUxMi45NjEgMTUuMDMxQzUwMy41ODYgNS42NTYgNDg4LjQgNS42NTYgNDc5LjAyNSAxNS4wMzFMMzkwLjYyNSAxMDMuNDM4QzM0OS4yNTMgMTQ0LjgxMyAyNzQuNzU3IDE0NC44MTMgMjMzLjM4NSAxMDMuNDM4TDE3Ny45NTEgNDhIMjMyLjAxQzI0NS4yNTkgNDggMjU2LjAwOSAzNy4yNSAyNTYuMDA5IDI0UzI0NS4yNTkgMCAyMzIuMDEgMEgxMjAuMDE4QzEwNi43NjggMCA5Ni4wMTkgMTAuNzUgOTYuMDE5IDI0VjEzNkM5Ni4wMTkgMTQ5LjI1IDEwNi43NjggMTYwIDEyMC4wMTggMTYwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PhoneMissed(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M624.875 343.844C543.584 261.375 435.309 215.969 319.989 215.969C204.684 215.969 96.41 261.375 15.118 343.844C-1.896 361.125 -4.881 387.578 7.853 408.156L56.615 487.25C69.818 508.781 96.425 517.5 120.018 508.25L217.667 468.656C238.807 460 251.993 437.969 249.728 415.094L245.509 372.109C294.131 358.828 345.925 358.859 394.609 372.109L390.406 414.906C387.953 437.969 401.218 460.094 422.56 468.688L520.07 508.219C526.397 510.781 532.959 512 539.428 512C556.895 512 573.691 503.062 583.362 487.312L632.14 408.188C644.89 387.547 641.89 361.078 624.875 343.844ZM591.299 382.984V383L542.49 462.156C541.568 463.719 539.631 464.344 538.084 463.719L440.512 424.156C438.997 423.562 437.95 421.719 438.153 419.781L444.293 357.328C445.371 346.281 438.747 335.937 428.263 332.312C358.455 308.125 281.601 308.141 211.855 332.297C201.372 335.922 194.747 346.266 195.825 357.312L201.95 419.812C202.153 421.687 201.106 423.562 199.559 424.187L102.144 463.687C100.363 464.406 98.488 463.75 97.488 462.094L48.694 382.937C47.6 381.172 47.85 379 49.303 377.531C121.502 304.297 217.636 263.969 319.989 263.969C422.357 263.969 518.492 304.297 590.706 377.547C592.159 379.016 592.393 381.203 591.299 382.984ZM120.018 160C133.267 160 144.016 149.25 144.016 136V81.938L199.45 137.375C229.073 167 270.101 184 312.005 184S394.937 167 424.56 137.375L512.961 48.969C522.335 39.594 522.335 24.406 512.961 15.031C503.586 5.656 488.4 5.656 479.025 15.031L390.625 103.438C349.253 144.813 274.757 144.813 233.385 103.438L177.951 48H232.01C245.259 48 256.009 37.25 256.009 24S245.259 0 232.01 0H120.018C106.768 0 96.019 10.75 96.019 24V136C96.019 149.25 106.768 160 120.018 160Z" />
        </Icon>
    </>
}