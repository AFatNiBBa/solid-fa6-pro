
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chess-board` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chess-board?s=thin chess-board}
 * @preview ![chess-board](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAgMzJINDhDMjEuNDkgMzIgMCA1My40OSAwIDgwVjQzMkMwIDQ1OC41MSAyMS40OSA0ODAgNDggNDgwSDQwMEM0MjYuNTEgNDgwIDQ0OCA0NTguNTEgNDQ4IDQzMlY4MEM0NDggNTMuNDkgNDI2LjUxIDMyIDQwMCAzMlpNNDMyIDQzMkM0MzIgNDQ5LjY0NSA0MTcuNjQ1IDQ2NCA0MDAgNDY0SDQ4QzMwLjM1NSA0NjQgMTYgNDQ5LjY0NSAxNiA0MzJWODBDMTYgNjIuMzU1IDMwLjM1NSA0OCA0OCA0OEg0MDBDNDE3LjY0NSA0OCA0MzIgNjIuMzU1IDQzMiA4MFY0MzJaTTM3NiA4OEg3MkM2My4xODggODggNTYgOTUuMTcyIDU2IDEwNFY0MDhDNTYgNDE2LjgyOCA2My4xODggNDI0IDcyIDQyNEgzNzZDMzg0LjgxMiA0MjQgMzkyIDQxNi44MjggMzkyIDQwOFYxMDRDMzkyIDk1LjE3MiAzODQuODEyIDg4IDM3NiA4OFpNMTIwIDQwOEg3MlYzNjBIMTIwVjQwOFpNMTIwIDM0NEg3MlYyOTZIMTIwVjM0NFpNMTIwIDI4MEg3MlYyMzJIMTIwVjI4MFpNMTIwIDIxNkg3MlYxNjhIMTIwVjIxNlpNMTIwIDE1Mkg3MlYxMDRIMTIwVjE1MlpNMTg0IDQwOEgxMzZWMzYwSDE4NFY0MDhaTTE4NCAzNDRIMTM2VjI5NkgxODRWMzQ0Wk0xODQgMjgwSDEzNlYyMzJIMTg0VjI4MFpNMTg0IDIxNkgxMzZWMTY4SDE4NFYyMTZaTTE4NCAxNTJIMTM2VjEwNEgxODRWMTUyWk0yNDggNDA4SDIwMFYzNjBIMjQ4VjQwOFpNMjQ4IDM0NEgyMDBWMjk2SDI0OFYzNDRaTTI0OCAyODBIMjAwVjIzMkgyNDhWMjgwWk0yNDggMjE2SDIwMFYxNjhIMjQ4VjIxNlpNMjQ4IDE1MkgyMDBWMTA0SDI0OFYxNTJaTTMxMiA0MDhIMjY0VjM2MEgzMTJWNDA4Wk0zMTIgMzQ0SDI2NFYyOTZIMzEyVjM0NFpNMzEyIDI4MEgyNjRWMjMySDMxMlYyODBaTTMxMiAyMTZIMjY0VjE2OEgzMTJWMjE2Wk0zMTIgMTUySDI2NFYxMDRIMzEyVjE1MlpNMzc2IDQwNy45ODRDMzc2IDQwOCAzNzYgNDA4IDM3NiA0MDhIMzI4VjM2MEgzNzZWNDA3Ljk4NFpNMzc2IDM0NEgzMjhWMjk2SDM3NlYzNDRaTTM3NiAyODBIMzI4VjIzMkgzNzZWMjgwWk0zNzYgMjE2SDMyOFYxNjhIMzc2VjIxNlpNMzc2IDE1MkgzMjhWMTA0SDM3NlYxNTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ChessBoard(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M400 32H48C21.49 32 0 53.49 0 80V432C0 458.51 21.49 480 48 480H400C426.51 480 448 458.51 448 432V80C448 53.49 426.51 32 400 32ZM432 432C432 449.645 417.645 464 400 464H48C30.355 464 16 449.645 16 432V80C16 62.355 30.355 48 48 48H400C417.645 48 432 62.355 432 80V432ZM376 88H72C63.188 88 56 95.172 56 104V408C56 416.828 63.188 424 72 424H376C384.812 424 392 416.828 392 408V104C392 95.172 384.812 88 376 88ZM120 408H72V360H120V408ZM120 344H72V296H120V344ZM120 280H72V232H120V280ZM120 216H72V168H120V216ZM120 152H72V104H120V152ZM184 408H136V360H184V408ZM184 344H136V296H184V344ZM184 280H136V232H184V280ZM184 216H136V168H184V216ZM184 152H136V104H184V152ZM248 408H200V360H248V408ZM248 344H200V296H248V344ZM248 280H200V232H248V280ZM248 216H200V168H248V216ZM248 152H200V104H248V152ZM312 408H264V360H312V408ZM312 344H264V296H312V344ZM312 280H264V232H312V280ZM312 216H264V168H312V216ZM312 152H264V104H312V152ZM376 407.984C376 408 376 408 376 408H328V360H376V407.984ZM376 344H328V296H376V344ZM376 280H328V232H376V280ZM376 216H328V168H376V216ZM376 152H328V104H376V152Z" />
        </Icon>
    </>
}