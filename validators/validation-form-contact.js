import { required, email, minLength, maxLength } from '@vuelidate/validators'

export default {
  name: { required, minLength: minLength(3), maxLength: maxLength(20) },
  phone: { required, minLength: minLength(10), maxLength: maxLength(15) },
  email: { required, email },
  details: { required, minLength: minLength(10) },
}
