
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `certificate` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/certificate?s=thin certificate}
 * @preview ![certificate](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NTguNjA5IDI1NS44NTVMNTA0LjYwNSAyMTAuODU1QzUxOC4zNTQgMTk3Ljk4IDUxMS44NTUgMTc0Ljg1NSA0OTMuOTggMTcwLjYwNUw0MzEuMjM2IDE1NC42MDVMNDQ4Ljk4NCA5Mi42MDVDNDUzLjM3NyA3Ni44OTggNDQwLjg4MyA2MS45NjQgNDI1LjY2IDYxLjk2NEM0MjMuNTU5IDYxLjk2NCA0MjEuNDA2IDYyLjI0NyA0MTkuMjM2IDYyLjg1NUwzNTcuMjQyIDgwLjYwNUwzNDEuMzY5IDE3Ljg1NEMzMzguNjgyIDYuNzA2IDMyOC4zNCAwLjAwOSAzMTcuODc5IDAuMDA5QzMxMS44MDEgMC4wMDcgMzA1LjY4MiAyLjI2OCAzMDAuOTk2IDcuMjI5TDI1NiA1My42MDRMMjExLjAwNCA3LjIyOUMyMDYuMzMgMi4yNzggMjAwLjE4NCAtMC4wMDEgMTk0LjA3NCAtMC4wMDFDMTgzLjY3OCAtMC4wMDEgMTczLjM4NyA2LjU5NiAxNzAuNjMxIDE3Ljg1NEwxNTQuNzU4IDgwLjYwNUw5Mi43NjQgNjIuODU1QzkwLjU5NiA2Mi4yNDcgODguNDQxIDYxLjk2NCA4Ni4zNCA2MS45NjRDNzEuMTE1IDYxLjk2MiA1OC42MjEgNzYuODk4IDYzLjAxNiA5Mi42MDVMODAuNzY0IDE1NC42MDVMMTguMDIgMTcwLjYwNUMwLjE0NSAxNzQuODU1IC02LjIyOSAxOTcuOTggNy4zOTUgMjEwLjg1NUw1My4zOTEgMjU1Ljg1NUw3LjM5NSAzMDAuODU1Qy02LjM1NCAzMTMuODU1IDAuMTQ1IDMzNi45ODEgMTguMDIgMzQxLjIzMUw4MC43NjQgMzU3LjIzMUw2My4wMTYgNDE5LjIzMUM1OC42MTMgNDM0Ljk2OSA3MS4xNyA0NDkuODM2IDg2LjQzNiA0NDkuODM2Qzg4LjUwNiA0NDkuODM2IDkwLjYyNyA0NDkuNTYzIDkyLjc2NCA0NDguOTgxTDE1NC43NTggNDMxLjIzMUwxNzAuNjMxIDQ5My45ODFDMTczLjQzNyA1MDUuNTE2IDE4My41MzcgNTExLjk5OSAxOTMuODAxIDUxMS45OTlDMTk5Ljk5OCA1MTEuOTk5IDIwNi4yNTIgNTA5LjYzOSAyMTEuMDA0IDUwNC42MDZMMjU2IDQ1OC42MDZMMzAwLjk5NiA1MDQuNjA2QzMwNS42NSA1MDkuNjM0IDMxMS44MyA1MTEuOTU2IDMxNy45OCA1MTEuOTU2QzMyOC4zNDQgNTExLjk1NiAzMzguNjIzIDUwNS4zNTYgMzQxLjM2OSA0OTMuOTgxTDM1Ny4yNDIgNDMxLjIzMUw0MTkuMjM2IDQ0OC45ODFDNDIxLjM3MSA0NDkuNTYzIDQyMy40OTQgNDQ5LjgzNiA0MjUuNTY0IDQ0OS44MzZDNDQwLjgzMiA0NDkuODM2IDQ1My4zODcgNDM0Ljk3MSA0NDguOTg0IDQxOS4yMzFMNDMxLjIzNiAzNTcuMjMxTDQ5My45OCAzNDEuMjMxQzUxMS44NTUgMzM2Ljk4MSA1MTguMjI5IDMxMy44NTYgNTA0LjYwNSAzMDAuODU1TDQ1OC42MDkgMjU1Ljg1NVpNNDk1LjY0MyAzMjAuMjA5QzQ5NS4yNzkgMzIxLjU1MyA0OTQuMDI5IDMyNC43NzMgNDkwLjAyNyAzMjUuNzI3TDQyNy4yODMgMzQxLjcyN0w0MTEuMzIgMzQ1Ljc5N0w0MTUuODU0IDM2MS42MzNMNDMzLjU3NiA0MjMuNTQxQzQzNC40MjYgNDI2LjU3OSA0MzMuMzA1IDQyOC45MjggNDMyLjIxNSA0MzAuMzY2QzQzMC41NjYgNDMyLjU0IDQyOC4wOCA0MzMuODM2IDQyNS41NjYgNDMzLjgzNkM0MjQuODcxIDQzMy44MzYgNDI0LjE1OCA0MzMuNzM5IDQyMy42NDEgNDMzLjU5OEwzNjEuNjQ2IDQxNS44NDhMMzQ1Ljc3OSA0MTEuMzA1TDM0MS43MyA0MjcuMzA3TDMyNS44MTYgNDkwLjIyN0MzMjQuODY1IDQ5NC4xNjMgMzIxLjA4OCA0OTUuOTU2IDMxNy45OCA0OTUuOTU2QzMxNS44NjUgNDk1Ljk1NiAzMTQuMTAyIDQ5NS4yMSAzMTIuNDM0IDQ5My40MTdMMjY3LjQzNyA0NDcuNDE3TDI1NiA0MzUuNzIzTDI0NC41NjIgNDQ3LjQxN0wxOTkuMzY5IDQ5My42MjRDMTk3LjUxNCA0OTUuNTg3IDE5NS4zMTggNDk1Ljk5OSAxOTMuODAxIDQ5NS45OTlDMTkwLjkzNiA0OTUuOTk5IDE4Ny4yMTkgNDk0LjQ4MSAxODYuMTQzIDQ5MC4wNTdMMTcwLjI3IDQyNy4zMDdMMTY2LjIyMSA0MTEuMzA1TDE1MC4zNTQgNDE1Ljg0OEw4OC41NTMgNDMzLjU0M0M4Ny44NDIgNDMzLjczOSA4Ny4xMjkgNDMzLjgzNiA4Ni40MzQgNDMzLjgzNkM4My45MjIgNDMzLjgzNiA4MS40MzYgNDMyLjUzOCA3OS43ODUgNDMwLjM2NEM3OC42OTUgNDI4LjkyOCA3Ny41NzQgNDI2LjU3NyA3OC4zOTggNDIzLjYzM0w5Ni4xNDYgMzYxLjYzM0wxMDAuNjggMzQ1Ljc5N0w4NC43MTcgMzQxLjcyN0wyMS43MjEgMzI1LjY2NEMxNy45MTYgMzI0Ljc2IDE2LjY1OCAzMjEuNTA0IDE2LjI5MyAzMjAuMTQ3QzE1Ljg0IDMxOC40NTMgMTUuNTA4IDMxNS4yMDUgMTguNTg0IDMxMi4yOTFMNjQuNTggMjY3LjI5MUw3Ni4yNyAyNTUuODU1TDY0LjU4IDI0NC40MThMMTguMzg1IDE5OS4yMjZDMTUuNDU1IDE5Ni40NTcgMTUuOTg0IDE5MyAxNi4zNSAxOTEuNjQyQzE2LjcwOSAxOTAuMjk0IDE3Ljk1NSAxODcuMDY2IDIxLjk3MyAxODYuMTA5TDg0LjcxNyAxNzAuMTA5TDEwMC42OCAxNjYuMDM5TDk2LjE0NiAxNTAuMjAxTDc4LjQyNCA4OC4yOTRDNzcuNTY4IDg1LjIzMiA3OC43MDMgODIuODU3IDc5LjgwNyA4MS40MDFDODEuNDQxIDc5LjI0OSA4My44ODMgNzcuOTY0IDg2LjMzOCA3Ny45NjRDODcuMDMxIDc3Ljk2NCA4Ny43NDIgNzguMDY0IDg4LjM1OSA3OC4yMzVMMTUwLjM1NCA5NS45ODZMMTY2LjIyMSAxMDAuNTI5TDE3MC4yNyA4NC41MjhMMTg2LjE3MiAyMS42NTdDMTg3LjEyMyAxNy43NyAxOTAuOTM2IDE1Ljk5OSAxOTQuMDcyIDE1Ljk5OUMxOTYuMjAxIDE1Ljk5OSAxOTcuOTgyIDE2Ljc0MyAxOTkuNTIxIDE4LjM3TDI0NC41MTggNjQuNzQ1TDI1NiA3Ni41ODFMMjY3LjQ4MiA2NC43NDVMMzEyLjYyOSAxOC4yMTRDMzE0LjAxMiAxNi43NTEgMzE1Ljc3NyAxNi4wMDkgMzE3Ljg3NyAxNi4wMDlDMzIxLjE1IDE2LjAwOSAzMjQuOTMgMTcuOTMxIDMyNS44NTcgMjEuNzc4TDM0MS43MyA4NC41MjhMMzQ1Ljc3OSAxMDAuNTI5TDM2MS42NDYgOTUuOTg2TDQyMy41NDcgNzguMjYzQzQyNC4yNTggNzguMDY0IDQyNC45NjkgNzcuOTY0IDQyNS42NiA3Ny45NjRDNDI4LjExNyA3Ny45NjQgNDMwLjU1OSA3OS4yNDkgNDMyLjE5MyA4MS40MDNDNDMzLjI5NyA4Mi44NTcgNDM0LjQzMiA4NS4yMzQgNDMzLjYwMiA4OC4yTDQxNS44NTQgMTUwLjIwMUw0MTEuMzIgMTY2LjAzOUw0MjcuMjgzIDE3MC4xMDlMNDkwLjI3OSAxODYuMTcxQzQ5NC4xIDE4Ny4wOCA0OTUuMzU0IDE5MC4zNDMgNDk1LjcxNSAxOTEuNzA1QzQ5Ni4xNTYgMTkzLjM2NyA0OTYuNDc3IDE5Ni41NDYgNDkzLjQxNiAxOTkuNDE4TDQ0Ny40MiAyNDQuNDE4TDQzNS43MyAyNTUuODU1TDQ0Ny40MiAyNjcuMjkxTDQ5My41NjEgMzEyLjQzQzQ5Ni41NjQgMzE1LjI5NyA0OTYuMDE4IDMxOC44MjYgNDk1LjY0MyAzMjAuMjA5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Certificate(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M458.609 255.855L504.605 210.855C518.354 197.98 511.855 174.855 493.98 170.605L431.236 154.605L448.984 92.605C453.377 76.898 440.883 61.964 425.66 61.964C423.559 61.964 421.406 62.247 419.236 62.855L357.242 80.605L341.369 17.854C338.682 6.706 328.34 0.009 317.879 0.009C311.801 0.007 305.682 2.268 300.996 7.229L256 53.604L211.004 7.229C206.33 2.278 200.184 -0.001 194.074 -0.001C183.678 -0.001 173.387 6.596 170.631 17.854L154.758 80.605L92.764 62.855C90.596 62.247 88.441 61.964 86.34 61.964C71.115 61.962 58.621 76.898 63.016 92.605L80.764 154.605L18.02 170.605C0.145 174.855 -6.229 197.98 7.395 210.855L53.391 255.855L7.395 300.855C-6.354 313.855 0.145 336.981 18.02 341.231L80.764 357.231L63.016 419.231C58.613 434.969 71.17 449.836 86.436 449.836C88.506 449.836 90.627 449.563 92.764 448.981L154.758 431.231L170.631 493.981C173.437 505.516 183.537 511.999 193.801 511.999C199.998 511.999 206.252 509.639 211.004 504.606L256 458.606L300.996 504.606C305.65 509.634 311.83 511.956 317.98 511.956C328.344 511.956 338.623 505.356 341.369 493.981L357.242 431.231L419.236 448.981C421.371 449.563 423.494 449.836 425.564 449.836C440.832 449.836 453.387 434.971 448.984 419.231L431.236 357.231L493.98 341.231C511.855 336.981 518.229 313.856 504.605 300.855L458.609 255.855ZM495.643 320.209C495.279 321.553 494.029 324.773 490.027 325.727L427.283 341.727L411.32 345.797L415.854 361.633L433.576 423.541C434.426 426.579 433.305 428.928 432.215 430.366C430.566 432.54 428.08 433.836 425.566 433.836C424.871 433.836 424.158 433.739 423.641 433.598L361.646 415.848L345.779 411.305L341.73 427.307L325.816 490.227C324.865 494.163 321.088 495.956 317.98 495.956C315.865 495.956 314.102 495.21 312.434 493.417L267.437 447.417L256 435.723L244.562 447.417L199.369 493.624C197.514 495.587 195.318 495.999 193.801 495.999C190.936 495.999 187.219 494.481 186.143 490.057L170.27 427.307L166.221 411.305L150.354 415.848L88.553 433.543C87.842 433.739 87.129 433.836 86.434 433.836C83.922 433.836 81.436 432.538 79.785 430.364C78.695 428.928 77.574 426.577 78.398 423.633L96.146 361.633L100.68 345.797L84.717 341.727L21.721 325.664C17.916 324.76 16.658 321.504 16.293 320.147C15.84 318.453 15.508 315.205 18.584 312.291L64.58 267.291L76.27 255.855L64.58 244.418L18.385 199.226C15.455 196.457 15.984 193 16.35 191.642C16.709 190.294 17.955 187.066 21.973 186.109L84.717 170.109L100.68 166.039L96.146 150.201L78.424 88.294C77.568 85.232 78.703 82.857 79.807 81.401C81.441 79.249 83.883 77.964 86.338 77.964C87.031 77.964 87.742 78.064 88.359 78.235L150.354 95.986L166.221 100.529L170.27 84.528L186.172 21.657C187.123 17.77 190.936 15.999 194.072 15.999C196.201 15.999 197.982 16.743 199.521 18.37L244.518 64.745L256 76.581L267.482 64.745L312.629 18.214C314.012 16.751 315.777 16.009 317.877 16.009C321.15 16.009 324.93 17.931 325.857 21.778L341.73 84.528L345.779 100.529L361.646 95.986L423.547 78.263C424.258 78.064 424.969 77.964 425.66 77.964C428.117 77.964 430.559 79.249 432.193 81.403C433.297 82.857 434.432 85.234 433.602 88.2L415.854 150.201L411.32 166.039L427.283 170.109L490.279 186.171C494.1 187.08 495.354 190.343 495.715 191.705C496.156 193.367 496.477 196.546 493.416 199.418L447.42 244.418L435.73 255.855L447.42 267.291L493.561 312.43C496.564 315.297 496.018 318.826 495.643 320.209Z" />
        </Icon>
    </>
}