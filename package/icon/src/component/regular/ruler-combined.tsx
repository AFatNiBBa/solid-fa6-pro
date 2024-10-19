
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `ruler-combined` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-combined?s=regular ruler-combined}
 * @preview ![ruler-combined](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgMjcySDI0MFY0OEMyNDAgMjEuNiAyMTguNCAwIDE5MiAwSDQ4QzIxLjYgMCAwIDIxLjYgMCA0OFY0NjRDMCA0OTAuNCAyMS42IDUxMiA0OCA1MTJINDY0QzQ5MC40IDUxMiA1MTIgNDkwLjQgNTEyIDQ2NFYzMjBDNTEyIDI5My42IDQ5MC40IDI3MiA0NjQgMjcyWk00NjQgNDY0SDQ4VjQ4SDE5MlY5NkgxMTJDMTAzLjE2NCA5NiA5NiAxMDMuMTYyIDk2IDExMkM5NiAxMjAuODM2IDEwMy4xNjQgMTI4IDExMiAxMjhIMTkyVjE5MkgxMTJDMTAzLjE2NCAxOTIgOTYgMTk5LjE2MiA5NiAyMDhDOTYgMjE2LjgzNiAxMDMuMTY0IDIyNCAxMTIgMjI0SDE5MlYyODhIMTEyQzEwMy4xNjQgMjg4IDk2IDI5NS4xNjIgOTYgMzA0Qzk2IDMxMi44MzYgMTAzLjE2NCAzMjAgMTEyIDMyMEgxOTJWNDAwQzE5MiA0MDguODM2IDE5OS4xNjQgNDE2IDIwOCA0MTZDMjE2LjgzOCA0MTYgMjI0IDQwOC44MzYgMjI0IDQwMFYzMjBIMjg4VjQwMEMyODggNDA4LjgzNiAyOTUuMTY0IDQxNiAzMDQgNDE2QzMxMi44MzggNDE2IDMyMCA0MDguODM2IDMyMCA0MDBWMzIwSDM4NFY0MDBDMzg0IDQwOC44MzYgMzkxLjE2NCA0MTYgNDAwIDQxNkM0MDguODM4IDQxNiA0MTYgNDA4LjgzNiA0MTYgNDAwVjMyMEg0NjRWNDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function RulerCombined(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M464 272H240V48C240 21.6 218.4 0 192 0H48C21.6 0 0 21.6 0 48V464C0 490.4 21.6 512 48 512H464C490.4 512 512 490.4 512 464V320C512 293.6 490.4 272 464 272ZM464 464H48V48H192V96H112C103.164 96 96 103.162 96 112C96 120.836 103.164 128 112 128H192V192H112C103.164 192 96 199.162 96 208C96 216.836 103.164 224 112 224H192V288H112C103.164 288 96 295.162 96 304C96 312.836 103.164 320 112 320H192V400C192 408.836 199.164 416 208 416C216.838 416 224 408.836 224 400V320H288V400C288 408.836 295.164 416 304 416C312.838 416 320 408.836 320 400V320H384V400C384 408.836 391.164 416 400 416C408.838 416 416 408.836 416 400V320H464V464Z" />
        </Icon>
    </>
}