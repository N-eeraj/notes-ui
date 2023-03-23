import { toast } from '@toast'
import api from '@axios'

const useAxios = async ({ method, url, body, setLoading, successCallBack }) => {
    setLoading && setLoading(true)
    try {
        const { data } = await api[method](url, body)
        if (!data.success) throw null
        successCallBack(data)
    }
    catch (err) {
        if (Array.isArray(err?.response?.data?.message)) {
            err.response.data.message
                .forEach(message => toast.error(message))
        }
        else {
            const message = err?.response?.data?.message || err?.message || 'Oops something went wrong'
            toast.error(message)
        }
    }
    finally {
        setLoading && setLoading(false)
    }
}

export default useAxios