
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `envelope-open-text` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-open-text?s=light envelope-open-text}
 * @preview ![envelope-open-text](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgMTkyQzQ4Ny4xNjQgMTkyIDQ4MCAxOTkuMTYyIDQ4MCAyMDhWNDY0QzQ4MCA0NzIuODM2IDQ3Mi44MzYgNDgwIDQ2NCA0ODBINDhDMzkuMTY0IDQ4MCAzMiA0NzIuODM2IDMyIDQ2NFYyMDhDMzIgMTk5LjE2MiAyNC44MzYgMTkyIDE2IDE5MlMwIDE5OS4xNjIgMCAyMDhWNDY0QzAgNDkwLjUxIDIxLjQ5IDUxMiA0OCA1MTJINDY0QzQ5MC41MSA1MTIgNTEyIDQ5MC41MSA1MTIgNDY0VjIwOEM1MTIgMTk5LjE2MiA1MDQuODM2IDE5MiA0OTYgMTkyWk02NC44NzUgMjc2LjMzOEM2NS4xNTggMjc3LjMyNCA2NS40MjggMjc4LjI2NiA2NS44ODUgMjc5LjE2NEM2Ni4zMiAyODAuMDI3IDY2Ljg5NiAyODAuNzcgNjcuNDkyIDI4MS41NDlDNjguMTg3IDI4Mi40NTkgNjguODg1IDI4My4yOTkgNjkuNzU2IDI4NC4wMzlDNzAuMDUxIDI4NC4yODkgNzAuMTk5IDI4NC42NDMgNzAuNTE2IDI4NC44NzVMMjAzLjI4MSAzODIuNTk0QzIxOC43MDMgMzkzLjk2OSAyMzYuOTM4IDQwMCAyNTYgNDAwUzI5My4yOTcgMzkzLjk2OSAzMDguNzAzIDM4Mi41OTRMNDQxLjQ4NCAyODQuODc1QzQ0MS44MDEgMjg0LjY0MyA0NDEuOTQ5IDI4NC4yODkgNDQyLjI0NCAyODQuMDM5QzQ0My4xMTUgMjgzLjI5OSA0NDMuODEzIDI4Mi40NTkgNDQ0LjUwOCAyODEuNTQ5QzQ0NS4xMDQgMjgwLjc3IDQ0NS42OCAyODAuMDI3IDQ0Ni4xMTUgMjc5LjE2NEM0NDYuNTcyIDI3OC4yNjYgNDQ2Ljg0MiAyNzcuMzI0IDQ0Ny4xMjUgMjc2LjMzOEM0NDcuNDI4IDI3NS4yNzcgNDQ3LjY4NCAyNzQuMjYgNDQ3Ljc2NiAyNzMuMTYyQzQ0Ny43OTcgMjcyLjc1OCA0NDggMjcyLjQxMiA0NDggMjcyVjQ4QzQ0OCAyMS41MzEgNDI2LjQ2OSAwIDQwMCAwSDExMkM4NS41MzEgMCA2NCAyMS41MzEgNjQgNDhWMjcyQzY0IDI3Mi40MTIgNjQuMjAzIDI3Mi43NTggNjQuMjM0IDI3My4xNjJDNjQuMzE2IDI3NC4yNiA2NC41NzIgMjc1LjI3NyA2NC44NzUgMjc2LjMzOFpNOTYgNDhDOTYgMzkuMTg4IDEwMy4xNzIgMzIgMTEyIDMySDQwMEM0MDguODI4IDMyIDQxNiAzOS4xODggNDE2IDQ4VjI2My45MkwyODkuNzE5IDM1Ni44NDRDMjY5LjkzNyAzNzEuNDY5IDI0Mi4wNzggMzcxLjQ2OSAyMjIuMjY2IDM1Ni44NDRMOTYgMjYzLjkyVjQ4Wk0zNTIgMjQwQzM1MiAyMzEuMTYyIDM0NC44MzYgMjI0IDMzNiAyMjRIMTc2QzE2Ny4xNjQgMjI0IDE2MCAyMzEuMTYyIDE2MCAyNDBDMTYwIDI0OC44MzYgMTY3LjE2NCAyNTYgMTc2IDI1NkgzMzZDMzQ0LjgzNiAyNTYgMzUyIDI0OC44MzYgMzUyIDI0MFpNMTc2IDE2MEgzMzZDMzQ0LjgzNiAxNjAgMzUyIDE1Mi44MzYgMzUyIDE0NEMzNTIgMTM1LjE2MiAzNDQuODM2IDEyOCAzMzYgMTI4SDE3NkMxNjcuMTY0IDEyOCAxNjAgMTM1LjE2MiAxNjAgMTQ0QzE2MCAxNTIuODM2IDE2Ny4xNjQgMTYwIDE3NiAxNjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function EnvelopeOpenText(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M496 192C487.164 192 480 199.162 480 208V464C480 472.836 472.836 480 464 480H48C39.164 480 32 472.836 32 464V208C32 199.162 24.836 192 16 192S0 199.162 0 208V464C0 490.51 21.49 512 48 512H464C490.51 512 512 490.51 512 464V208C512 199.162 504.836 192 496 192ZM64.875 276.338C65.158 277.324 65.428 278.266 65.885 279.164C66.32 280.027 66.896 280.77 67.492 281.549C68.187 282.459 68.885 283.299 69.756 284.039C70.051 284.289 70.199 284.643 70.516 284.875L203.281 382.594C218.703 393.969 236.938 400 256 400S293.297 393.969 308.703 382.594L441.484 284.875C441.801 284.643 441.949 284.289 442.244 284.039C443.115 283.299 443.813 282.459 444.508 281.549C445.104 280.77 445.68 280.027 446.115 279.164C446.572 278.266 446.842 277.324 447.125 276.338C447.428 275.277 447.684 274.26 447.766 273.162C447.797 272.758 448 272.412 448 272V48C448 21.531 426.469 0 400 0H112C85.531 0 64 21.531 64 48V272C64 272.412 64.203 272.758 64.234 273.162C64.316 274.26 64.572 275.277 64.875 276.338ZM96 48C96 39.188 103.172 32 112 32H400C408.828 32 416 39.188 416 48V263.92L289.719 356.844C269.937 371.469 242.078 371.469 222.266 356.844L96 263.92V48ZM352 240C352 231.162 344.836 224 336 224H176C167.164 224 160 231.162 160 240C160 248.836 167.164 256 176 256H336C344.836 256 352 248.836 352 240ZM176 160H336C344.836 160 352 152.836 352 144C352 135.162 344.836 128 336 128H176C167.164 128 160 135.162 160 144C160 152.836 167.164 160 176 160Z" />
        </Icon>
    </>
}