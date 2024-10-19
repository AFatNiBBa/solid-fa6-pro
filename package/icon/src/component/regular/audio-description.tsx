
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `audio-description` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/audio-description?s=regular audio-description}
 * @preview ![audio-description](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEg1MTJDNTQ3LjM0OCA0ODAgNTc2IDQ1MS4zNDYgNTc2IDQxNlY5NkM1NzYgNjAuNjUyIDU0Ny4zNDggMzIgNTEyIDMyWk01MjggNDE2QzUyOCA0MjQuODIyIDUyMC44MjIgNDMyIDUxMiA0MzJINjRDNTUuMTc4IDQzMiA0OCA0MjQuODIyIDQ4IDQxNlY5NkM0OCA4Ny4xNzggNTUuMTc4IDgwIDY0IDgwSDUxMkM1MjAuODIyIDgwIDUyOCA4Ny4xNzggNTI4IDk2VjQxNlpNMjEzLjQ2OSAxNzMuMjY2QzIwNS4zNDQgMTU3LjAxNiAxNzguNjU2IDE1Ny4wMTYgMTcwLjUzMSAxNzMuMjY2TDk4LjUzMSAzMTcuMjY2QzkyLjU5NCAzMjkuMTI1IDk3LjQwNiAzNDMuNTMxIDEwOS4yODEgMzQ5LjQ2OUMxMjEuMTU2IDM1NS40MzggMTM1LjU2MiAzNTAuNTk0IDE0MS40NjkgMzM4LjczNEwxNTAuODM2IDMyMEgyMzMuMTY0TDI0Mi41MzEgMzM4LjczNEMyNDYuNzUgMzQ3LjE0MSAyNTUuMjE5IDM1MiAyNjQuMDMxIDM1MkMyNjcuNjI1IDM1MiAyNzEuMjgxIDM1MS4xODggMjc0LjcxOSAzNDkuNDY5QzI4Ni41OTQgMzQzLjUzMSAyOTEuNDA2IDMyOS4xMjUgMjg1LjQ2OSAzMTcuMjY2TDIxMy40NjkgMTczLjI2NlpNMTcwLjgzNiAyODBMMTkyIDIzNy42NzJMMjEzLjE2NCAyODBIMTcwLjgzNlpNMzg0IDE2MEgzMjhDMzE0Ljc1IDE2MCAzMDQgMTcwLjc1IDMwNCAxODRWMzI4QzMwNCAzNDEuMjUgMzE0Ljc1IDM1MiAzMjggMzUySDM4NEM0MzYuOTM4IDM1MiA0ODAgMzA4LjkzOCA0ODAgMjU2UzQzNi45MzggMTYwIDM4NCAxNjBaTTM4NCAzMDRIMzUyVjIwOEgzODRDNDEwLjQ2OSAyMDggNDMyIDIyOS41MzEgNDMyIDI1NlM0MTAuNDY5IDMwNCAzODQgMzA0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function AudioDescription(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M512 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H512C547.348 480 576 451.346 576 416V96C576 60.652 547.348 32 512 32ZM528 416C528 424.822 520.822 432 512 432H64C55.178 432 48 424.822 48 416V96C48 87.178 55.178 80 64 80H512C520.822 80 528 87.178 528 96V416ZM213.469 173.266C205.344 157.016 178.656 157.016 170.531 173.266L98.531 317.266C92.594 329.125 97.406 343.531 109.281 349.469C121.156 355.438 135.562 350.594 141.469 338.734L150.836 320H233.164L242.531 338.734C246.75 347.141 255.219 352 264.031 352C267.625 352 271.281 351.188 274.719 349.469C286.594 343.531 291.406 329.125 285.469 317.266L213.469 173.266ZM170.836 280L192 237.672L213.164 280H170.836ZM384 160H328C314.75 160 304 170.75 304 184V328C304 341.25 314.75 352 328 352H384C436.938 352 480 308.938 480 256S436.938 160 384 160ZM384 304H352V208H384C410.469 208 432 229.531 432 256S410.469 304 384 304Z" />
        </Icon>
    </>
}