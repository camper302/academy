import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

export interface IAdmin {
  email: string
  password: string
  name: string
  role: 'super' | 'admin'
  isActive: boolean
  lastLogin?: Date
  createdAt: Date
  updatedAt: Date
}

const AdminSchema = new mongoose.Schema<IAdmin>({
  email: {
    type: String,
    required: [true, '이메일은 필수입니다'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, '비밀번호는 필수입니다'],
    minlength: [6, '비밀번호는 최소 6자 이상이어야 합니다'],
  },
  name: {
    type: String,
    required: [true, '이름은 필수입니다'],
  },
  role: {
    type: String,
    enum: ['super', 'admin'],
    default: 'admin',
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  lastLogin: {
    type: Date,
  },
}, {
  timestamps: true,
})

// 비밀번호 해싱 미들웨어
AdminSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next()
  
  try {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
  } catch (error) {
    next(error as Error)
  }
})

// 비밀번호 검증 메서드
AdminSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password)
}

// lastLogin 업데이트 메서드
AdminSchema.methods.updateLastLogin = async function(): Promise<void> {
  this.lastLogin = new Date()
  await this.save()
}

const AdminModel = mongoose.models.Admin || mongoose.model<IAdmin>('Admin', AdminSchema)

export default AdminModel
