export class ResponseDto<T = any> {
  code: number
  data?: T
  message: string

  static success<T>(data?: T, message: string = '操作成功'): ResponseDto<T> {
    return {
      code: 200,
      data,
      message,
    }
  }

  static error(message: string = '操作失败', code: number = 500): ResponseDto {
    return {
      code,
      message,
    }
  }
}
