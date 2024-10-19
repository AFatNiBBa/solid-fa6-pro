
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `gauge-simple` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-simple?s=regular gauge-simple}
 * @preview ![gauge-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggMzJDMTI5IDMyIDAgMTYxIDAgMzIwQzAgMzcyLjc1IDE0LjI1IDQyMi4yNSAzOSA0NjQuNzVDNDQuNjI1IDQ3NC4zNzUgNTUuMzc1IDQ4MCA2Ni41IDQ4MEg1MDkuNUM1MjAuNjI1IDQ4MCA1MzEuMzc1IDQ3NC4zNzUgNTM3IDQ2NC43NUM1NjEuNzUgNDIyLjI1IDU3NiAzNzIuNzUgNTc2IDMyMEM1NzYgMTYxIDQ0NyAzMiAyODggMzJaTTI4OCA0MzJDMjY1Ljk0NSA0MzIgMjQ4IDQxNC4wNTcgMjQ4IDM5MlMyNjUuOTQ1IDM1MiAyODggMzUyQzMxMC4wNTcgMzUyIDMyOCAzNjkuOTQzIDMyOCAzOTJTMzEwLjA1NyA0MzIgMjg4IDQzMlpNNTAwLjI1IDQzMkgzNjUuOTY1QzM3Mi4xNjYgNDE5Ljk0OSAzNzYgNDA2LjQ4NiAzNzYgMzkyQzM3NiAzNjguMjYyIDM2Ni41MDIgMzQ2LjgwOSAzNTEuMjIzIDMzMC45OEw0MjguMDk0IDIxMy4xMDlDNDM1LjM0NCAyMDIuMDE2IDQzMi4yMTkgMTg3LjE0MSA0MjEuMTI1IDE3OS44OTFDNDA5Ljk2OSAxNzIuNjg3IDM5NS4xMjUgMTc1Ljc4MSAzODcuOTA2IDE4Ni44OTFMMzA5LjU4NiAzMDYuOTgyQzMwMi42NDMgMzA1LjIyMSAyOTUuNDkyIDMwNCAyODggMzA0QzIzOS40IDMwNCAyMDAgMzQzLjM5OCAyMDAgMzkyQzIwMCA0MDYuNDg2IDIwMy44MzQgNDE5Ljk0OSAyMTAuMDM1IDQzMkg3NS43NUM1Ny41IDM5Ny42MjUgNDggMzU5LjEyNSA0OCAzMjBDNDggMTg3LjYyNSAxNTUuNjI1IDgwIDI4OCA4MFM1MjggMTg3LjYyNSA1MjggMzIwQzUyOCAzNTkuMTI1IDUxOC41IDM5Ny42MjUgNTAwLjI1IDQzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function GaugeSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M288 32C129 32 0 161 0 320C0 372.75 14.25 422.25 39 464.75C44.625 474.375 55.375 480 66.5 480H509.5C520.625 480 531.375 474.375 537 464.75C561.75 422.25 576 372.75 576 320C576 161 447 32 288 32ZM288 432C265.945 432 248 414.057 248 392S265.945 352 288 352C310.057 352 328 369.943 328 392S310.057 432 288 432ZM500.25 432H365.965C372.166 419.949 376 406.486 376 392C376 368.262 366.502 346.809 351.223 330.98L428.094 213.109C435.344 202.016 432.219 187.141 421.125 179.891C409.969 172.687 395.125 175.781 387.906 186.891L309.586 306.982C302.643 305.221 295.492 304 288 304C239.4 304 200 343.398 200 392C200 406.486 203.834 419.949 210.035 432H75.75C57.5 397.625 48 359.125 48 320C48 187.625 155.625 80 288 80S528 187.625 528 320C528 359.125 518.5 397.625 500.25 432Z" />
        </Icon>
    </>
}