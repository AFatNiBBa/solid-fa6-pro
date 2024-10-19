
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `notes-medical` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/notes-medical?s=light notes-medical}
 * @preview ![notes-medical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjggMjU2SDMyMFYyMDhDMzIwIDE5OS4xNjQgMzEyLjgzNiAxOTIgMzA0IDE5MkgyNzJDMjYzLjE2NCAxOTIgMjU2IDE5OS4xNjQgMjU2IDIwOFYyNTZIMjA4QzE5OS4xNjQgMjU2IDE5MiAyNjMuMTY0IDE5MiAyNzJWMzA0QzE5MiAzMTIuODM2IDE5OS4xNjQgMzIwIDIwOCAzMjBIMjU2VjM2OEMyNTYgMzc2LjgzNiAyNjMuMTY0IDM4NCAyNzIgMzg0SDMwNEMzMTIuODM2IDM4NCAzMjAgMzc2LjgzNiAzMjAgMzY4VjMyMEgzNjhDMzc2LjgzNiAzMjAgMzg0IDMxMi44MzYgMzg0IDMwNFYyNzJDMzg0IDI2My4xNjQgMzc2LjgzNiAyNTYgMzY4IDI1NlpNMzY4IDMyQzM3Ni44MzYgMzIgMzg0IDI0LjgzNiAzODQgMTZTMzc2LjgzNiAwIDM2OCAwSDk2QzQyLjk4IDAgMCA0Mi45OCAwIDk2VjM2OEMwIDM3Ni44MzYgNy4xNjQgMzg0IDE2IDM4NFMzMiAzNzYuODM2IDMyIDM2OFY5NkMzMiA2MC42NTYgNjAuNjU2IDMyIDk2IDMySDM2OFpNNDE2IDk2SDE2MEMxMjQuNjU0IDk2IDk2IDEyNC42NTIgOTYgMTYwVjQxNkM5NiA0NTEuMzQ4IDEyNC42NTQgNDgwIDE2MCA0ODBIMzI1LjQ5QzM0Mi40NjUgNDgwIDM1OC43NDQgNDczLjI1OCAzNzAuNzQ2IDQ2MS4yNTRMNDYxLjI1NiAzNzAuNzQ2QzQ3My4yNTggMzU4Ljc0MiA0ODAgMzQyLjQ2NSA0ODAgMzI1LjQ5MlYxNjBDNDgwIDEyNC42NTIgNDUxLjM0OCA5NiA0MTYgOTZaTTQ0OCAzMjUuNDkyQzQ0OCAzMzQuMDM5IDQ0NC42NzIgMzQyLjA3NCA0MzguNjI5IDM0OC4xMTdMMzQ4LjExNyA0MzguNjI5QzM0Mi4wNzQgNDQ0LjY3MiAzMzQuMDM5IDQ0OCAzMjUuNDkgNDQ4SDE2MEMxNDIuMzU1IDQ0OCAxMjggNDMzLjY0NSAxMjggNDE2VjE2MEMxMjggMTQyLjM1NSAxNDIuMzU1IDEyOCAxNjAgMTI4SDQxNkM0MzMuNjQ1IDEyOCA0NDggMTQyLjM1NSA0NDggMTYwVjMyNS40OTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function NotesMedical(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M368 256H320V208C320 199.164 312.836 192 304 192H272C263.164 192 256 199.164 256 208V256H208C199.164 256 192 263.164 192 272V304C192 312.836 199.164 320 208 320H256V368C256 376.836 263.164 384 272 384H304C312.836 384 320 376.836 320 368V320H368C376.836 320 384 312.836 384 304V272C384 263.164 376.836 256 368 256ZM368 32C376.836 32 384 24.836 384 16S376.836 0 368 0H96C42.98 0 0 42.98 0 96V368C0 376.836 7.164 384 16 384S32 376.836 32 368V96C32 60.656 60.656 32 96 32H368ZM416 96H160C124.654 96 96 124.652 96 160V416C96 451.348 124.654 480 160 480H325.49C342.465 480 358.744 473.258 370.746 461.254L461.256 370.746C473.258 358.742 480 342.465 480 325.492V160C480 124.652 451.348 96 416 96ZM448 325.492C448 334.039 444.672 342.074 438.629 348.117L348.117 438.629C342.074 444.672 334.039 448 325.49 448H160C142.355 448 128 433.645 128 416V160C128 142.355 142.355 128 160 128H416C433.645 128 448 142.355 448 160V325.492Z" />
        </Icon>
    </>
}