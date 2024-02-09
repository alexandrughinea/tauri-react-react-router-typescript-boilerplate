import { MutationOptions, useMutation, useQueryClient } from '@tanstack/react-query'
import { useServices } from '@/providers'
import { LoginData } from '@/@core-lib'
import { noop } from 'lodash'

export function useMutationLogout(options?: MutationOptions<boolean, Error, void>) {
    const { authService } = useServices()
    const queryClient = useQueryClient()

    return useMutation<boolean, Error, void>({
        ...options,
        mutationKey: [authService.url],
        mutationFn() {
            return authService.logout()
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
