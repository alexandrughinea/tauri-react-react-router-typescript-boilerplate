import { MutationOptions, useMutation, useQueryClient } from '@tanstack/react-query'
import { useServices } from '@/providers'
import { LoginData } from '@/@core-lib'
import { noop } from 'lodash'

export function useMutationLogin(options?: MutationOptions<boolean, Error, LoginData>) {
    const { authService } = useServices()
    const queryClient = useQueryClient()

    return useMutation<boolean, Error, LoginData>({
        ...options,
        mutationKey: [authService.url],
        mutationFn(data) {
            return authService.login(data)
        },
        async onSuccess(...args) {
            options?.onSuccess?.(...args)

            await queryClient
                .invalidateQueries({
                    queryKey: [authService.url]
                })
                .catch(noop)
        }
    })
}
