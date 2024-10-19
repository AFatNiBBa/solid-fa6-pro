
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `object-group` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/object-group?s=duotone object-group}
 * @preview ![object-group](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ5NiAxMjhDNTA0LjgzOCAxMjggNTEyIDEyMC44MzYgNTEyIDExMlY0OEM1MTIgMzkuMTY0IDUwNC44MzggMzIgNDk2IDMySDQzMkM0MjMuMTY0IDMyIDQxNiAzOS4xNjQgNDE2IDQ4VjY0SDk2VjQ4Qzk2IDM5LjE2NCA4OC44MzggMzIgODAgMzJIMTZDNy4xNjQgMzIgMCAzOS4xNjQgMCA0OFYxMTJDMCAxMjAuODM2IDcuMTY0IDEyOCAxNiAxMjhIMzJWMzg0SDE2QzcuMTY0IDM4NCAwIDM5MS4xNjQgMCA0MDBWNDY0QzAgNDcyLjgzNiA3LjE2NCA0ODAgMTYgNDgwSDgwQzg4LjgzOCA0ODAgOTYgNDcyLjgzNiA5NiA0NjRWNDQ4SDQxNlY0NjRDNDE2IDQ3Mi44MzYgNDIzLjE2NCA0ODAgNDMyIDQ4MEg0OTZDNTA0LjgzOCA0ODAgNTEyIDQ3Mi44MzYgNTEyIDQ2NFY0MDBDNTEyIDM5MS4xNjQgNTA0LjgzOCAzODQgNDk2IDM4NEg0ODBWMTI4SDQ5NlpNNDE2IDM2OEM0MTYgMzc2LjgzNiA0MDguODM4IDM4NCA0MDAgMzg0SDI0MEMyMzEuMTY0IDM4NCAyMjQgMzc2LjgzNiAyMjQgMzY4VjI4OEgxMTJDMTAzLjE2NCAyODggOTYgMjgwLjgzNiA5NiAyNzJWMTQ0Qzk2IDEzNS4xNjQgMTAzLjE2NCAxMjggMTEyIDEyOEgyNzJDMjgwLjgzOCAxMjggMjg4IDEzNS4xNjQgMjg4IDE0NFYyMjRINDAwQzQwOC44MzggMjI0IDQxNiAyMzEuMTY0IDQxNiAyNDBWMzY4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik05NiAyNzJWMTQ0Qzk2IDEzNS4xNjQgMTAzLjE2NCAxMjggMTEyIDEyOEgyNzJDMjgwLjgzOCAxMjggMjg4IDEzNS4xNjQgMjg4IDE0NFYyNzJDMjg4IDI4MC44MzYgMjgwLjgzOCAyODggMjcyIDI4OEgxMTJDMTAzLjE2NCAyODggOTYgMjgwLjgzNiA5NiAyNzJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ObjectGroup(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M496 128C504.838 128 512 120.836 512 112V48C512 39.164 504.838 32 496 32H432C423.164 32 416 39.164 416 48V64H96V48C96 39.164 88.838 32 80 32H16C7.164 32 0 39.164 0 48V112C0 120.836 7.164 128 16 128H32V384H16C7.164 384 0 391.164 0 400V464C0 472.836 7.164 480 16 480H80C88.838 480 96 472.836 96 464V448H416V464C416 472.836 423.164 480 432 480H496C504.838 480 512 472.836 512 464V400C512 391.164 504.838 384 496 384H480V128H496ZM416 368C416 376.836 408.838 384 400 384H240C231.164 384 224 376.836 224 368V288H112C103.164 288 96 280.836 96 272V144C96 135.164 103.164 128 112 128H272C280.838 128 288 135.164 288 144V224H400C408.838 224 416 231.164 416 240V368Z" />
            <path d="M96 272V144C96 135.164 103.164 128 112 128H272C280.838 128 288 135.164 288 144V272C288 280.836 280.838 288 272 288H112C103.164 288 96 280.836 96 272Z" />
        </Icon>
    </>
}