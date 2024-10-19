
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `lips` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lips?s=duotone lips}
 * @preview ![lips](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTAuMzk1IDIyNEg2My44MzhDNjMuODM4IDIyNCAxMzguNTk3IDMyMCAyODguMDA1IDMyMFM1MTIuMTcxIDIyNCA1MTIuMTcxIDIyNEg1NzUuNjA1QzU3Ni42OTggMjMzLjUzMSA1NzUuNTYgMjQzLjI4OSA1NzEuNzE2IDI1Mi4zOThDNTQ2LjQ5NiAzMTIuMjUgNDcwLjI3NSA0NDggMzI0LjcwMiA0NDhIMjUxLjI5OEMxMDUuNzI1IDQ0OCAyOS41MDQgMzEyLjI1IDQuMjg0IDI1Mi4zOThDMC40NCAyNDMuMjg5IC0wLjY5OCAyMzMuNTMxIDAuMzk1IDIyNFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNjMuNDQ0IDIyNEgwQzAuODkxIDIxNi4yMjcgMy4xODIgMjA4LjU4NiA3LjM4IDIwMS42NjRDNTMuODc4IDEyNC41OTggMTU1Ljg4MSA2NCAxOTkuNTY0IDY0QzE5OS41NjQgNjQgMjI4Ljk0OSA2NCAyODcuNjA2IDEwOUMzNDYuMjYzIDY0IDM3NS42NDYgNjQgMzc1LjY0NiA2NEM0MTkuMzMxIDY0IDUyMS4zMzMgMTI0LjU5OCA1NjcuODMgMjAxLjY2NEM1NzIuMDI4IDIwOC41ODYgNTc0LjMxOSAyMTYuMjI3IDU3NS4yMTEgMjI0SDUxMS43NzdDNTExLjc3NyAyMjQgNDU1LjczNSAxOTIgMzcxLjY3MyAxOTJMMzQwLjY5NiAyMDAuODc1QzMyNC4xNjkgMjA1LjUgMzA1Ljk5OSAyMDggMjg3LjYxIDIwOFMyNTEuMDUyIDIwNS41IDIzNC41MjQgMjAwLjg3NUwyMDMuNTQ4IDE5MkMxMTkuNDg1IDE5MiA2My40NDQgMjI0IDYzLjQ0NCAyMjRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Lips(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M0.395 224H63.838C63.838 224 138.597 320 288.005 320S512.171 224 512.171 224H575.605C576.698 233.531 575.56 243.289 571.716 252.398C546.496 312.25 470.275 448 324.702 448H251.298C105.725 448 29.504 312.25 4.284 252.398C0.44 243.289 -0.698 233.531 0.395 224Z" />
            <path d="M63.444 224H0C0.891 216.227 3.182 208.586 7.38 201.664C53.878 124.598 155.881 64 199.564 64C199.564 64 228.949 64 287.606 109C346.263 64 375.646 64 375.646 64C419.331 64 521.333 124.598 567.83 201.664C572.028 208.586 574.319 216.227 575.211 224H511.777C511.777 224 455.735 192 371.673 192L340.696 200.875C324.169 205.5 305.999 208 287.61 208S251.052 205.5 234.524 200.875L203.548 192C119.485 192 63.444 224 63.444 224Z" />
        </Icon>
    </>
}