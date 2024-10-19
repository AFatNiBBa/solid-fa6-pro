
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sd-cards` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sd-cards?s=regular sd-cards}
 * @preview ![sd-cards](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggODBDMjc5LjE2NCA4MCAyNzIgODcuMTYyIDI3MiA5NlYxNjBDMjcyIDE2OC44MzYgMjc5LjE2NCAxNzYgMjg4IDE3NlMzMDQgMTY4LjgzNiAzMDQgMTYwVjk2QzMwNCA4Ny4xNjIgMjk2LjgzNiA4MCAyODggODBaTTM1MiA4MEMzNDMuMTY0IDgwIDMzNiA4Ny4xNjIgMzM2IDk2VjE2MEMzMzYgMTY4LjgzNiAzNDMuMTY0IDE3NiAzNTIgMTc2UzM2OCAxNjguODM2IDM2OCAxNjBWOTZDMzY4IDg3LjE2MiAzNjAuODM2IDgwIDM1MiA4MFpNMzg0IDBIMjIxLjI1NkMyMTIuNzY4IDAgMjA0LjYyOSAzLjM3MSAxOTguNjI3IDkuMzczTDEwNS4zNzMgMTAyLjYyN0M5OS4zNzEgMTA4LjYyOSA5NiAxMTYuNzY4IDk2IDEyNS4yNTRWMzUyQzk2IDM4Ny4xOTkgMTI0LjgwMSA0MTYgMTYwIDQxNkgzODRDNDE5LjIwMSA0MTYgNDQ4IDM4Ny4xOTkgNDQ4IDM1MlY2NEM0NDggMjguNzk5IDQxOS4yMDEgMCAzODQgMFpNNDAwIDM1MkM0MDAgMzYwLjY3MiAzOTIuNjc0IDM2OCAzODQgMzY4SDE2MEMxNTEuMzI4IDM2OCAxNDQgMzYwLjY3MiAxNDQgMzUyVjEzMS44ODNMMjI3Ljg4MyA0OEgzODRDMzkyLjY3NCA0OCA0MDAgNTUuMzI2IDQwMCA2NFYzNTJaTTQ4IDQzMlY5NkMyMS40OSA5NiAwIDExNy40OTIgMCAxNDRWNDQ4QzAgNDgzLjM0NCAyOC42NTQgNTEyIDY0IDUxMkgzMDRDMzMwLjUxIDUxMiAzNTIgNDkwLjUwOCAzNTIgNDY0SDgwQzYyLjMyNiA0NjQgNDggNDQ5LjY3MiA0OCA0MzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SdCards(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M288 80C279.164 80 272 87.162 272 96V160C272 168.836 279.164 176 288 176S304 168.836 304 160V96C304 87.162 296.836 80 288 80ZM352 80C343.164 80 336 87.162 336 96V160C336 168.836 343.164 176 352 176S368 168.836 368 160V96C368 87.162 360.836 80 352 80ZM384 0H221.256C212.768 0 204.629 3.371 198.627 9.373L105.373 102.627C99.371 108.629 96 116.768 96 125.254V352C96 387.199 124.801 416 160 416H384C419.201 416 448 387.199 448 352V64C448 28.799 419.201 0 384 0ZM400 352C400 360.672 392.674 368 384 368H160C151.328 368 144 360.672 144 352V131.883L227.883 48H384C392.674 48 400 55.326 400 64V352ZM48 432V96C21.49 96 0 117.492 0 144V448C0 483.344 28.654 512 64 512H304C330.51 512 352 490.508 352 464H80C62.326 464 48 449.672 48 432Z" />
        </Icon>
    </>
}