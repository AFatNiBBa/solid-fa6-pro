
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `gift` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gift?s=thin gift}
 * @preview ![gift](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAgMTI4SDQyMi44MjhDNDM4LjA0NyAxMTQuNzk1IDQ0OCA5NC43MzQgNDQ4IDcyQzQ0OCAzMi4yOTcgNDE4LjIxOSAwIDM4MS42MjUgMEMzNTAuNTU1IDAgMzI3LjMxMiA2LjMyNiAyNTYgMTIwLjg4N0MxODQuNjg4IDYuMzI2IDE2MS40NDUgMCAxMzAuMzc1IDBDOTMuNzgxIDAgNjQgMzIuMjk3IDY0IDcyQzY0IDk0LjczNCA3My45NTMgMTE0Ljc5NSA4OS4xNzIgMTI4SDMyQzE0LjMyOCAxMjggMCAxNDIuMzI2IDAgMTYwVjIyNEMwIDI0MS42NzQgMTQuMzI4IDI1NiAzMiAyNTZWNDQ4QzMyIDQ4My4zNDYgNjAuNjUyIDUxMiA5NiA1MTJINDE2QzQ1MS4zNDggNTEyIDQ4MCA0ODMuMzQ2IDQ4MCA0NDhWMjU2QzQ5Ny42NzIgMjU2IDUxMiAyNDEuNjc0IDUxMiAyMjRWMTYwQzUxMiAxNDIuMzI2IDQ5Ny42NzIgMTI4IDQ4MCAxMjhaTTM4MS42MjUgMTZDNDA5LjQwNiAxNiA0MzIgNDEuMTI1IDQzMiA3MlM0MDkuNDA2IDEyOCAzODEuNjI1IDEyOEgyNzAuMzQ0QzM0MC4xNTYgMTYgMzU4LjUzMSAxNiAzODEuNjI1IDE2Wk04MCA3MkM4MCA0MS4xMjUgMTAyLjU5NCAxNiAxMzAuMzc1IDE2QzE1My40NjkgMTYgMTcxLjg0NCAxNiAyNDEuNjU2IDEyOEgxMzAuMzc1QzEwMi41OTQgMTI4IDgwIDEwMi44NzUgODAgNzJaTTE2IDIyNFYxNjBDMTYgMTUxLjE3OCAyMy4xNzYgMTQ0IDMyIDE0NEgyNDhWMjQwSDMyQzIzLjE3NiAyNDAgMTYgMjMyLjgyMiAxNiAyMjRaTTk2IDQ5NkM2OS41MzEgNDk2IDQ4IDQ3NC40NjcgNDggNDQ4VjI1NkgyNDhWNDk2SDk2Wk00NjQgNDQ4QzQ2NCA0NzQuNDY3IDQ0Mi40NjkgNDk2IDQxNiA0OTZIMjY0VjI1Nkg0NjRWNDQ4Wk00OTYgMjI0QzQ5NiAyMzIuODIyIDQ4OC44MjQgMjQwIDQ4MCAyNDBIMjY0VjE0NEg0ODBDNDg4LjgyNCAxNDQgNDk2IDE1MS4xNzggNDk2IDE2MFYyMjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Gift(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M480 128H422.828C438.047 114.795 448 94.734 448 72C448 32.297 418.219 0 381.625 0C350.555 0 327.312 6.326 256 120.887C184.688 6.326 161.445 0 130.375 0C93.781 0 64 32.297 64 72C64 94.734 73.953 114.795 89.172 128H32C14.328 128 0 142.326 0 160V224C0 241.674 14.328 256 32 256V448C32 483.346 60.652 512 96 512H416C451.348 512 480 483.346 480 448V256C497.672 256 512 241.674 512 224V160C512 142.326 497.672 128 480 128ZM381.625 16C409.406 16 432 41.125 432 72S409.406 128 381.625 128H270.344C340.156 16 358.531 16 381.625 16ZM80 72C80 41.125 102.594 16 130.375 16C153.469 16 171.844 16 241.656 128H130.375C102.594 128 80 102.875 80 72ZM16 224V160C16 151.178 23.176 144 32 144H248V240H32C23.176 240 16 232.822 16 224ZM96 496C69.531 496 48 474.467 48 448V256H248V496H96ZM464 448C464 474.467 442.469 496 416 496H264V256H464V448ZM496 224C496 232.822 488.824 240 480 240H264V144H480C488.824 144 496 151.178 496 160V224Z" />
        </Icon>
    </>
}